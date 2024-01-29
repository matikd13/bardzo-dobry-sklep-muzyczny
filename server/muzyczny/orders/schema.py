import strawberry
import strawberry_django
from asgiref.sync import sync_to_async
from strawberry.types import Info
from strawberry_django.permissions import IsAuthenticated

import muzyczny.settings
from muzyczny.accounts.models import User
from muzyczny.orders.types import OrderItem, OrderItemInput, StripeResponse, Order as OrderType

from .models import Order, OrderItem
import stripe

@strawberry.type
class Query:
    @strawberry.field(extensions=[IsAuthenticated()])
    def order(self, info: Info, id: str) -> OrderType:
        user = User.objects.get(email=info.context.request.user.email)
        return Order.objects.get(user=user, id=int(id))

@strawberry.type
class Mutation:

    @strawberry.mutation(extensions=[IsAuthenticated()])
    def make_order(self, info: Info, order_items: list[OrderItemInput]) -> StripeResponse:
        user = User.objects.get(email=info.context.request.user.email)

        print(order_items)

        order = Order.objects.create(user=user)
        sum = 0
        for item in order_items:
            item = OrderItem.objects.create(product_id=item.prod_id, amount=item.quantity, order=order)
            sum += item.product.price * item.amount

        stripe.api_key = muzyczny.settings.STRIPE_API_KEY

        checkout_session = stripe.checkout.Session.create(
            line_items=[
                {
                    'price_data': {'currency': 'PLN', 'product_data': {'name': 'zakup płyt'}, 'unit_amount_decimal': sum*100},
                    'quantity': 1,
                },
            ],
            mode='payment',
            success_url=f'http://localhost:3000/order/{order.id}?success=true',
            cancel_url=f'http://localhost:3000/order/{order.id}?canceled=true',
        )

        return StripeResponse(url=checkout_session.url)

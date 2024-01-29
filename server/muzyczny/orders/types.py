import strawberry
import strawberry_django
from . import models
from ..products.types import Product


@strawberry.input
class OrderItemInput:
    prod_id: str
    quantity: int


@strawberry_django.type(models.OrderItem)
class OrderItem:
    id: str
    amount: int
    product: Product


@strawberry_django.type(models.Order)
class Order:
    id: str
    order_items: list[OrderItem]


@strawberry.type
class StripeResponse:
    url: str

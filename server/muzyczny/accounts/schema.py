import strawberry
import strawberry_django
from asgiref.sync import sync_to_async
from strawberry.types import Info
from strawberry_django.permissions import IsAuthenticated

from .models import User
from .types import User as UserType


@strawberry.type
class Query:
    users: list[UserType] = strawberry_django.field(extensions=[IsAuthenticated()])

    @strawberry.field(extensions=[IsAuthenticated()])
    def me(self, info: Info) -> UserType:
        return User.objects.get(email=info.context.request.user.email)


@strawberry.type
class Mutation:

    @strawberry.mutation(extensions=[IsAuthenticated()])
    @sync_to_async
    def update_user_address(self, info: Info, phone_number: str, street: str, street_number: str, postal_code: str, city: str) -> UserType:
        user = User.objects.get(email=info.context.request.user.email)
        user.phone_number = phone_number
        user.street = street
        user.street_number = street_number
        user.postal_code = postal_code
        user.city = city
        user.save()
        return user

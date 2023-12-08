import strawberry

from .types import User


@strawberry.type
class Query:
    users: list[User] = strawberry.django.field()

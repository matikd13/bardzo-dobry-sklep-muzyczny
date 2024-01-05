import strawberry
import strawberry_django
from strawberry_django.permissions import IsAuthenticated

from .types import User


@strawberry.type
class Query:
    users: list[User] = strawberry_django.field(extensions=[IsAuthenticated()])

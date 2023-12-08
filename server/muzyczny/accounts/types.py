import strawberry_django

from . import models


@strawberry_django.type(models.User)
class User:
    email: str
    is_active: bool

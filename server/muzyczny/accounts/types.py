import strawberry_django

from . import models


@strawberry_django.type(models.User)
class User:
    id: str
    email: str
    is_active: bool
    last_name: str
    first_name: str
    phone_number: str
    street: str
    street_number: str
    postal_code: str
    city: str


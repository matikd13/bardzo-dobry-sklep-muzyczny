import strawberry
import strawberry_django

from .types import Category, Product


@strawberry.type
class Query:
    products: list[Product] = strawberry_django.field()
    categories: list[Category] = strawberry_django.field()

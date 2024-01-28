import strawberry_django
from strawberry import auto

from . import models


@strawberry_django.type(models.Product)
class Product:
    id: auto
    name: auto
    author: auto
    release_date: auto
    quantity: auto
    price: auto
    discontinued: auto
    category: 'Category'


@strawberry_django.type(models.Category)
class Category:
    id: auto
    name: auto
    slug: auto
    category_type: auto

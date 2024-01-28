from django.db import models
from django.db.models import deletion
from django_extensions.db.models import TimeStampedModel


class Product(TimeStampedModel):
    name = models.CharField()
    author = models.CharField(null=True, blank=True)
    release_date = models.DateField(null=True, blank=True)
    quantity = models.PositiveIntegerField()
    price = models.DecimalField(decimal_places=2, max_digits=10)

    discontinued = models.BooleanField(default=False)

    category = models.ForeignKey('products.Category', on_delete=deletion.SET_NULL, null=True, related_name="products")

    def __str__(self):
        if self.category.category_type == "music":
            return f'{self.author} - {self.name} ({self.release_date})'
        return f'{self.name}'

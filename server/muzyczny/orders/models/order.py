from django.db import models
from django.db.models import deletion
from django_extensions.db.models import TimeStampedModel


class OrderItem(TimeStampedModel):
    amount = models.PositiveIntegerField()
    product = models.ForeignKey('products.Product', on_delete=deletion.PROTECT)
    order = models.ForeignKey('orders.Order', on_delete=deletion.CASCADE, related_name="order_items", null=True)

    def __str__(self):
        return f'{self.product} - {self.amount}'


class Order(TimeStampedModel):
    approved_by = user = models.ForeignKey('accounts.User', on_delete=deletion.SET_NULL, null=True, blank=True)
    approved_datetime = models.DateTimeField(null=True, blank=True)

    user = models.ForeignKey('accounts.User', on_delete=deletion.PROTECT, related_name="orders", null=True)

    @property
    def value(self):
        return 10

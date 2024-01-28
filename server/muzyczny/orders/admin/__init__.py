from django.contrib import admin

from muzyczny.orders.models.order import Order
from muzyczny.orders.models.order import OrderItem

admin.site.register(Order)
admin.site.register(OrderItem)

# Generated by Django 4.2.7 on 2024-01-05 11:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0003_remove_order_name_remove_order_product_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='amount',
        ),
        migrations.RemoveField(
            model_name='order',
            name='value',
        ),
    ]

# Generated by Django 4.2.7 on 2024-01-28 23:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_user_city_user_first_login_user_postal_code_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='phone_number',
            field=models.CharField(default='', max_length=16),
        ),
    ]

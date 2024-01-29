# Generated by Django 4.2.7 on 2024-01-28 23:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='city',
            field=models.CharField(default='', max_length=60),
        ),
        migrations.AddField(
            model_name='user',
            name='first_login',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='user',
            name='postal_code',
            field=models.CharField(default='', max_length=60),
        ),
        migrations.AddField(
            model_name='user',
            name='street',
            field=models.CharField(default='', max_length=60),
        ),
        migrations.AddField(
            model_name='user',
            name='street_number',
            field=models.CharField(default='', max_length=60),
        ),
        migrations.AlterField(
            model_name='user',
            name='first_name',
            field=models.CharField(max_length=60),
        ),
        migrations.AlterField(
            model_name='user',
            name='last_name',
            field=models.CharField(max_length=60),
        ),
    ]
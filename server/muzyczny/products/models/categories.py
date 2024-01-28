from django.db import models


class Category(models.Model):
    class CategoryType(models.TextChoices):
        MUSIC = 'music', 'Muzyka'
        OTHER = 'other', 'Pozostałe'

    slug = models.CharField()
    name = models.CharField()
    category_type = models.CharField(max_length=16, choices=CategoryType.choices, default="other")

    def __str__(self):
        return self.name

from django.contrib.auth.admin import UserAdmin as DjangoUserAdmin
from django.utils.translation import gettext_lazy as _


class UserAdmin(DjangoUserAdmin):
    list_display = ('email', 'first_name', 'last_name', 'is_active', 'is_staff')
    ordering = ('email',)

    fieldsets = (
        (None, {'fields': ('email',)}),
        (_('Personal info'), {'fields': ('first_name', 'last_name', 'phone_number')}),
        (_('Address'), {'fields': ('street', 'street_number', 'postal_code', 'city')}),
        (_('Permissions'), {
            'fields': (
                'is_active', 'is_staff', 'is_superuser',),
        }),
    )

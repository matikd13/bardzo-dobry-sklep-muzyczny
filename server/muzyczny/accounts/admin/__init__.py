from django.contrib import admin

from muzyczny.accounts.admin.user import UserAdmin
from muzyczny.accounts.models import User

admin.site.register(User, UserAdmin)
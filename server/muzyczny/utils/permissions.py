from typing import ClassVar, Optional, Callable, Any

from strawberry.types import Info
from strawberry_django import django_resolver
from strawberry_django.permissions import DjangoPermissionExtension, _desc, DjangoNoPermission
from strawberry_django.utils.typing import UserType


class IsMe(DjangoPermissionExtension):
    """Mark a field as only resolvable by authenticated users."""

    DEFAULT_ERROR_MESSAGE: ClassVar[str] = "User is not authenticated."
    SCHEMA_DIRECTIVE_DESCRIPTION: ClassVar[Optional[str]] = _desc(
        "Can only be resolved by authenticated users.",
    )

    @django_resolver(qs_hook=None)
    def resolve_for_user(
        self,
        resolver: Callable,
        user: Optional[UserType],
        *,
        info: Info,
        source: Any,
    ):
        if user is None or not user.is_authenticated or not user.is_active:
            raise DjangoNoPermission

        print(user)

        return resolver()

from django import forms
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django.contrib.auth.models import Group
from django.utils.translation import gettext_lazy as _

from .models import User


class UserChangeForm(forms.ModelForm):
    """A form for updating users. Includes all the fields on
    the user, but replaces the password field with admin's
    password hash display field.
    """

    password = ReadOnlyPasswordHashField(
        label=_("Password"),
        help_text=_(
            "Raw passwords are not stored, so there is no way to see this "
            "user’s password, but you can change the password using "
            '<a href="{}">this form</a>.'
        ),
    )

    class Meta:
        model = User
        fields = [
            "username",
            "display_name",
            "password",
            "email",
            "avatar",
            "is_active",
            "is_superuser",
            "is_staff",
            "user_permissions",
        ]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        password = self.fields.get("password")
        if password:
            password.help_text = password.help_text.format("../password/")
        user_permissions = self.fields.get("user_permissions")
        if user_permissions:
            user_permissions.queryset = user_permissions.queryset.select_related("content_type")

    def clean_password(self):
        # Regardless of what the user provides, return the initial value.
        # This is done here, rather than on the field, because the
        # field does not have access to the initial value
        return self.initial["password"]


@admin.register(User)
class UserAdmin(BaseUserAdmin):
    form = UserChangeForm

    list_display = ["username", "display_name", "is_active", "is_staff"]
    list_filter = ["is_staff", "is_active"]
    ordering = ["username"]
    fieldsets = (
        (None, {"fields": ["username", "password"]}),
        (_("Personal info"), {"fields": ["display_name", "email", "avatar"]}),
        (_("Permissions"), {"fields": ["is_superuser", "is_active", "is_staff", "user_permissions"]}),
        (_("Important dates"), {"fields": ["last_login", "created", "modified"]}),
    )
    readonly_fields = ["created", "modified"]


admin.site.unregister(Group)

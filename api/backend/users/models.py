from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _
from django_extensions.db.models import TimeStampedModel


class User(AbstractUser, TimeStampedModel):
    avatar = models.URLField(_("Avatar"), blank=True)
    display_name = models.CharField(_("Display Name"), max_length=255, blank=True)
    email = models.EmailField(_("Email"), blank=True, unique=True)

    class Meta:
        verbose_name = _("user")
        verbose_name_plural = _("users")

    def __str__(self):
        return self.display_name

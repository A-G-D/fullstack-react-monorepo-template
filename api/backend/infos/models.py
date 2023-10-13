from django.db import models
from django.utils.translation import gettext_lazy as _
from django_extensions.db.models import TimeStampedModel


class SiteInfo(TimeStampedModel):
    about = models.TextField(_("About"))
    author = models.CharField(_("Author"), max_length=0x100)

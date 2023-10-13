from .base import *  # pylint: disable=unused-wildcard-import,wildcard-import
from .base import env

ENVIRONMENT = "Local"

DEBUG = env.bool("DJANGO_DEBUG", True)

MEDIA_ROOT = str(BASE_DIR.path("media"))
MEDIA_PATH = env.str("DJANGO_MEDIA_PATH", default="/media/")
MEDIA_URL = env.str("DJANGO_MEDIA_URL", default="/media/")

EMAIL_BACKEND = env.str("DJANGO_EMAIL_BACKEND", "django.core.mail.backends.console.EmailBackend")

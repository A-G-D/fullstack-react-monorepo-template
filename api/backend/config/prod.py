from .base import *  # pylint: disable=unused-wildcard-import,wildcard-import
from .base import env  # pylint: disable=unused-wildcard-import,wildcard-import

ENVIRONMENT = env("DJANGO_ENVIRONMENT", default="Prod")

SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")
SECURE_HSTS_SECONDS = 60 * 60 * 24 * 30 * 6  # 180 days in seconds

# Email
EMAIL_BACKEND = env.str("DJANGO_EMAIL_BACKEND", "django.core.mail.backends.console.EmailBackend")

# Templates
TEMPLATE_LOADERS = (
    (
        "django.template.loaders.cached.Loader",
        (
            "django.template.loaders.filesystem.Loader",
            "django.template.loaders.app_directories.Loader",
        ),
    ),
)

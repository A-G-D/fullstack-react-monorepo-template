import environ

BASE_DIR = environ.Path(__file__) - 2
APPS_DIR = BASE_DIR

env = environ.Env()

if READ_DOT_ENV_FILE := env.bool("DJANGO_READ_DOT_ENV_FILE", default=True):
    env.read_env(str((APPS_DIR - 1).path(".env")))

DEBUG = env.bool("DJANGO_DEBUG", False)

# Application definition
INSTALLED_APPS = [
    "whitenoise.runserver_nostatic",
    #
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "django.contrib.postgres",
    # third-party
    "health_check",
    "health_check.db",
    "corsheaders",
    "rest_framework",
    "knox",
    # internal
    "infos.apps.InfosConfig",
    "users.apps.UsersConfig",
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "urls"

WSGI_APPLICATION = "wsgi.application"

# Database
DATABASES = {
    "default": env.db("DATABASE_URL", default="postgres://127.0.0.1:5432/steward"),
}
REDIS_URL = env.str("REDIS_URL", default="redis://localhost:6379")

REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": [
        "knox.auth.TokenAuthentication",
        "rest_framework.authentication.BasicAuthentication",
    ],
}

CACHES = {
    "default": {
        "BACKEND": "django.core.cache.backends.redis.RedisCache",
        "LOCATION": REDIS_URL,
    }
}
CACHE_TTL = env.int("CACHE_TTL", default=60 * 60 * 12)

# Security
ADMINS = env("DJANGO_ADMINS", default="")
SECRET_KEY = env("DJANGO_SECRET_KEY")
ALLOWED_HOSTS = env.list("DJANGO_ALLOWED_HOSTS")

CORS_ORIGIN_ALLOW_ALL = False
CORS_ALLOW_CREDENTIALS = True
CORS_EXPOSE_HEADERS = ["Content-Disposition"]
CORS_ORIGIN_REGEX_WHITELIST = env.list("DJANGO_CORS_ORIGIN_REGEX_WHITELIST")
CSRF_TRUSTED_ORIGINS = env.list("DJANGO_CSRF_TRUSTED_ORIGINS")

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

# General
APPEND_SLASH = True

# Custom user app
AUTH_USER_MODEL = "users.User"

# Internationalization
LANGUAGE_CODE = "en-us"
TIME_ZONE = "UTC"
USE_I18N = True
USE_TZ = True
DATE_FORMAT = "M j, Y"
TIME_FORMAT = "H:i"

# Static files (CSS, JavaScript, Images)
DEFAULT_FILE_STORAGE = env.str("DJANGO_DEFAULT_FILE_STORAGE", "django.core.files.storage.FileSystemStorage")

STATIC_URL = "/static/"
STATIC_ROOT = str(BASE_DIR.path("staticfiles"))
STATICFILES_FINDERS = [
    "django.contrib.staticfiles.finders.FileSystemFinder",
    "django.contrib.staticfiles.finders.AppDirectoriesFinder",
]
STATICFILES_DIRS = [
    ("steward", str(APPS_DIR.path("static"))),
]

TEMPLATES_DIR = [str(APPS_DIR.path("templates"))]
TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# django-versitileimagefield
VERSATILEIMAGEFIELD_RENDITION_KEY_SETS = {
    "card": [("full_size", "url"), ("thumbnail", "thumbnail__300x300")],
    "profile_photo": [("big", "crop__150x150"), ("medium", "crop__80x80")],
}

# django-rest-knox
# ------------------------------------------------------------------------------
# https://james1345.github.io/django-rest-knox/settings/
REST_KNOX = {
    "TOKEN_TTL": None,
    "USER_SERIALIZER": "users.serializers.UserSerializer",
}

# Celery
CELERY_BROKER_URL = f"{REDIS_URL}/0"
CELERY_RESULT_BACKEND = f"{REDIS_URL}/1"

DATA_UPLOAD_MAX_NUMBER_FIELDS = env.int("DATA_UPLOAD_MAX_NUMBER_FIELDS", 10000)

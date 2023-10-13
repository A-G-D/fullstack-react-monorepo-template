from django.contrib import admin
from django.urls import include, path

api_patterns = [
    path("", include("infos.urls")),
    path("", include("users.urls")),
]

urlpatterns = [
    path("admin/", admin.site.urls),
    path("health-check/", include("health_check.urls")),
    path("v1/", include(api_patterns)),
]

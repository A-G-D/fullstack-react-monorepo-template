from rest_framework import routers

from . import views

app_name = "users"


router = routers.SimpleRouter()
router.register("users", views.UserViewSet)

urlpatterns = router.urls

from django.urls import path

from . import views

app_name = "infos"


urlpatterns = [path("site-infos/", views.SiteInfoView.as_view())]

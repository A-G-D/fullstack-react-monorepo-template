from django.contrib import admin

from .models import SiteInfo


@admin.register(SiteInfo)
class SaleInfoAdmin(admin.ModelAdmin):
    list_display = ["id"]

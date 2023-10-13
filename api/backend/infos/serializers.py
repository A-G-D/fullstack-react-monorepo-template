from rest_framework.serializers import ModelSerializer

from .models import SiteInfo


class SiteInfoSerializer(ModelSerializer):
    class Meta:
        model = SiteInfo
        read_only_fields = ["pk", "created", "modified", "about", "author"]
        fields = read_only_fields + []

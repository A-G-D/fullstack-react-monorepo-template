from rest_framework import serializers

from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        read_only_fields = ["id", "username"]
        fields = read_only_fields + ["display_name", "email", "avatar"]

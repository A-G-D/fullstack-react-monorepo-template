from rest_framework import mixins, status, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response

from .models import User
from .serializers import UserSerializer


class UserViewSet(viewsets.GenericViewSet, mixins.RetrieveModelMixin, mixins.ListModelMixin):
    serializer_class = UserSerializer
    queryset = User.objects.none()

    def get_queryset(self):
        return User.objects.all()

    @action(detail=False, methods=["get", "patch"], url_path="me", permission_classes=[IsAuthenticatedOrReadOnly])
    def me(self, request, *args, **kwargs):
        if request.method == "GET":
            return self.me_retrieve(request, *args, **kwargs)
        elif request.method == "PATCH":
            return self.me_partial_update(request, *args, **kwargs)

    def me_retrieve(self, request, *args, **kwargs):
        instance = request.user
        serializer = self.get_serializer(instance, context={"request": request})
        return Response(serializer.data)

    def me_partial_update(self, request, *args, **kwargs):
        serializer = UserSerializer(request.user, data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({"data": ["Invalid input data."]}, status.HTTP_400_BAD_REQUEST)

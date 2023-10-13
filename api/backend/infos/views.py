from rest_framework.response import Response
from rest_framework.status import HTTP_404_NOT_FOUND
from rest_framework.views import APIView

from .models import SiteInfo
from .serializers import SiteInfoSerializer


class SiteInfoView(APIView):
    def get(self, request, *args, **kwargs):
        try:
            item = SiteInfo.objects.first()
            data = SiteInfoSerializer(item).data
            return Response(data)
        except Exception as e:
            return Response({}, status=HTTP_404_NOT_FOUND)

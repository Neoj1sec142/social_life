from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from .serializers import UserSerializer, UserDetailSerializer#, UserAllDetailsSerializer

class UserList(generics.ListCreateAPIView):
  permission_classes = (permissions.AllowAny,)
  serializer_class = UserSerializer
  queryset = User.objects.all()
#   def get(self, request):
#     users = User.objects.all()
#     return Response(users)

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetailByUsername(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserDetailSerializer
    lookup_field = 'username'
    

class UserCreate(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLogout(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        
        refresh_token = request.data['refresh_token']
        token = RefreshToken(refresh_token)
        token.blacklist()
        return Response(status=status.HTTP_205_RESET_CONTENT)



# class UserAllDetailsList(generics.ListCreateAPIView):
#   queryset = User.objects.all()
#   serializer_class = UserAllDetailsSerializer
  

# class UserAllDetailsDetail(generics.RetrieveUpdateDestroyAPIView):
#   queryset = User.objects.all()
#   serializer_class = UserAllDetailsSerializer
#   lookup_field = 'username'
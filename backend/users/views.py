from rest_framework import generics, status, permissions
from rest_framework.response import Response

# from rest_framework import serializers
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User, UserProfile, UserFollowing
from .serializers import UserSerializer, UserDetailSerializer, UserProfileSerializer, UserFollowingSerializer

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
    
class UserProfileList(generics.ListCreateAPIView):
    serializer_class = UserProfileSerializer
    # model = serializer_class.Meta.model
    queryset = UserProfile.objects.all()
    permission_classes = (permissions.AllowAny,)
    class Meta:
        model = UserProfile
        fields = ('__all__')
        lookup_field = 'pk'
        ordering = ('-date_created')


class UserProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = (permissions.AllowAny, )
    
class UserFollowingList(generics.ListCreateAPIView):
    queryset = UserFollowing.objects.all()
    serializer_class = UserFollowingSerializer
    permission_classes = (permissions.AllowAny,)
   
class UserFollowingDetail(generics.ListCreateAPIView):
    serializer_class = UserFollowingSerializer
    permission_classes = (permissions.AllowAny, )
    def get_queryset(self):
        user = self.kwargs['pk']
        queryset = UserFollowing.objects.filter(user_id=user)
        return queryset
        
class UnfollowView(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserFollowing.objects.all()
    serializer_class = UserFollowingSerializer
    permission_classes = (permissions.AllowAny, )           
    # permission_classes = (permissions.AllowAny,)
    # def get_queryset(self, pk, *args, **kwargs):
    #     profile = UserProfile.objects.get(pk=pk)
    #     queryset = profile.followers.all()
    #     return queryset
    # def get_queryset(self):
    #     follwed_id = self.kwargs['pk']
    #     profile = UserProfile.objects.filter(user_id=follwed_id)
    #     queryset = profile.followers.all()
    #     return queryset
    
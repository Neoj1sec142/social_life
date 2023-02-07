# views.py
from .models import User, Follow
from .serializers import UserSerializer, FollowSerializer, UserDetailSerializer
from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

class FollowList(generics.ListCreateAPIView):
    queryset = Follow.objects.all()
    serializer_class = FollowSerializer

class FollowDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Follow.objects.all()
    serializer_class = FollowSerializer

class FollowDetailView(generics.RetrieveAPIView):
    serializer_class = FollowSerializer
    # lookup_field = 'followee'
    # lookup_url_kwarg = 'follower'

    def get_queryset(self):
        followee = self.request.user
        follower = self.kwargs['follower']
        # followee_user = User.objects.get(username=followee)
        follower_user = User.objects.get(username=follower)
        return Follow.objects.filter(followee=followee, follower=follower_user)

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetailByUsername(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserDetailSerializer
    lookup_field = 'username'

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserDetailSerializer

class UserCreate(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request, format='json'):
        serializer = UserDetailSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def dispatch(self, request, *args, **kwargs):
        if request.method != 'POST':
            return Response({'error': 'Only POST requests are allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
        return super().dispatch(request, *args, **kwargs)

class UserLogout(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        
        refresh_token = request.data['refresh_token']
        token = RefreshToken(refresh_token)
        token.blacklist()
        return Response(status=status.HTTP_205_RESET_CONTENT)
    
class UserFollowers(generics.ListAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        user = self.kwargs['user_id']
        followers = Follow.objects.filter(followee=user).values_list('follower', flat=True)
        return User.objects.filter(id__in=followers)
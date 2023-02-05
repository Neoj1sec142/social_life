# views.py
from rest_framework import generics
from .models import User, Follow
from .serializers import UserSerializer, FollowSerializer

class FollowList(generics.ListCreateAPIView):
    queryset = Follow.objects.all()
    serializer_class = FollowSerializer

class FollowDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Follow.objects.all()
    serializer_class = FollowSerializer

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    
class UserFollowers(generics.ListAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        user = self.kwargs['user_id']
        followers = Follow.objects.filter(followee=user).values_list('follower', flat=True)
        return User.objects.filter(id__in=followers)
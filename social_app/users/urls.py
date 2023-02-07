# urls.py
from .serializers import *
from django.urls import path
from .views import *
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('token/obtain/',  jwt_views.TokenObtainPairView.as_view(), name='token-create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(),    name='token-refresh'),
    path('blacklist/', UserLogout.as_view(), name='token-blacklist'),
    path('users/', UserList.as_view(), name='user-list'),
    path('users/<int:pk>/', UserDetail.as_view(), name='user-detail'),
    path('follows/', FollowList.as_view(), name='follow-list'),
    path('follows/<int:pk>/', FollowDetail.as_view(), name='follow-detail'),
    path('follow/<int:follower_pk>/', FollowDetailView.as_view(), name='get_follow_by_username'),
    path('users/<int:user_id>/followers/', UserFollowers.as_view(), name='user-followers'),
    path('users/create/', UserCreate.as_view()),
    path('users/logout/', UserLogout.as_view()),
    path('users/<str:username>/', UserDetailByUsername.as_view())
]
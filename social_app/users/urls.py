# urls.py
from django.urls import path
from .views import UserList, UserDetail, FollowList, FollowDetail, UserFollowers

urlpatterns = [
    path('users/', UserList.as_view(), name='user-list'),
    path('users/<int:pk>/', UserDetail.as_view(), name='user-detail'),
    path('follows/', FollowList.as_view(), name='follow-list'),
    path('follows/<int:pk>/', FollowDetail.as_view(), name='follow-detail'),
    path('users/<int:user_id>/followers/', UserFollowers.as_view(), name='user-followers'),
]
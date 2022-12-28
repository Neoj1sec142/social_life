from .serializers import *
from django.urls import path
from .views import *
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    # JavaScript Web Tokens
    path('token/obtain/',  jwt_views.TokenObtainPairView.as_view(), name='token-create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(),    name='token-refresh'),
    path('blacklist/', UserLogout.as_view(), name='token-blacklist'),
    # User Routes
    path('users/', UserList.as_view()),
    path('users/create/', UserCreate.as_view()),
    path('users/<int:pk>/', UserDetail.as_view()),
    path('users/logout/', UserLogout.as_view()),
    path('users/<str:username>/', UserDetailByUsername.as_view()),
    # Profile Routes
    path('profiles/', UserProfileList.as_view()),
    path('profiles/<int:pk>/', UserProfileDetail.as_view()),
    path('profiles/<int:pk>/followers/', ListFollowers.as_view()),
    path('profiles/<int:pk>/follow/<int:user_pk>/', FollowUserView.as_view()),
    # path('profile/update/<int:pk>/', UpdateUserProfileView.as_view()),
]
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
    path('users/', UserList.as_view(), name='user_list'),
    path('users/create/', UserCreate.as_view(), name='user_create'),
    path('users/<int:pk>/', UserDetail.as_view(), name='user_detail'),
    path('users/logout/', UserLogout.as_view(), name='user_logout'),
    path('users/<str:username>/', UserDetailByUsername.as_view(), name='user_detail_by_username'),
    # Profile Routes
    path('profiles/', UserProfileList.as_view()),
    path('profiles/<int:pk>/', UserProfileDetail.as_view()),
    # path('profile/update/<int:pk>/', UpdateUserProfileView.as_view()),
]
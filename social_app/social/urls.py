# urls.py
from django.urls import path
from .views import PostCreateView, PostRetrieveUpdateDestroyView,\
    CommentCreateView, CommentRetrieveUpdateDestroyView,\
        PostDetailWithComments, UserPostList

urlpatterns = [
    path('posts/', PostCreateView.as_view(), name='post-create'),
    path('posts/<int:pk>/', PostRetrieveUpdateDestroyView.as_view(), name='post-detail'),
    path('posts/<int:pk>/comments/', PostDetailWithComments.as_view(), name='post_detail_with_comments'),
    path('user/posts/<str:username>/', UserPostList.as_view(), name='user_post_list'),
    path('comments/', CommentCreateView.as_view(), name='comment-create'),
    path('comments/<int:pk>/', CommentRetrieveUpdateDestroyView.as_view(), name='comment-detail')
]
# urls.py
from django.urls import path
from .views import PostCreateView, PostRetrieveUpdateDestroyView, CommentCreateView, CommentRetrieveUpdateDestroyView, PostCommentListView

urlpatterns = [
    path('posts/', PostCreateView.as_view(), name='post-create'),
    path('posts/<int:pk>/', PostRetrieveUpdateDestroyView.as_view(), name='post-detail'),
    path('posts/<int:post_pk>/comments/', PostCommentListView.as_view(), name='post-comment-list'),
    path('comments/', CommentCreateView.as_view(), name='comment-create'),
    path('comments/<int:pk>/', CommentRetrieveUpdateDestroyView.as_view(), name='comment-detail')
]
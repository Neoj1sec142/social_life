from django.urls import path
from .views import *

urlpatterns = [
    path('posts/', PostListView.as_view()),
    path('posts/<int:pk>/', PostDetail.as_view()),
    path('posts/<int:post_pk>/comments/', CommentList.as_view()),
    path('posts/<int:post_pk>/comments/<int:pk>/', CommentDetail.as_view()),
    
    path('posts/<int:pk>/like/', AddLike.as_view()),
    path('posts/<int:pk>/dislike/', AddDislike.as_view()),
    path('inbox/', CreateThreadModel.as_view()),
    path('inbox/<int:pk>/', ThreadModelListByUser.as_view()),
    path('inbox/<int:pk>/delete/', ThreadModelDetail.as_view()),
    path('inbox/<int:pk>/messages/', MessageList.as_view()),
    path('messages/<int:pk>/', MessageDetail.as_view()),
    
    # path('posts/<int:post_pk>/comment/<int:pk>/like/', AddCommentLike.as_view(), name='comment-like'),
    # path('posts/<int:post_pk>/comment/<int:pk>/dislike/', AddCommentDislike.as_view(), name='comment-dislike'),
    # path('posts/<int:post_pk>/comment/<int:pk>/reply/', CommentReplyView.as_view(), name='comment-reply'),
    # path('profile/<int:pk>/followers/add/', AddFollower.as_view(), name='add-follower'),
    # path('profile/<int:pk>/followers/remove/', RemoveFollower.as_view(), name='remove-follower'),
    # path('profile/<int:pk>/followers/', ListFollowers.as_view(), name='list-followers'),
    # path('search/', UserSearch.as_view(), name='profile-search'),
    # Not sure if I will Need these^^^
    
    
    # path('notification/<int:notification_pk>/post/<int:post_pk>/', PostNotification.as_view(), name='post-notification'),
    # path('notification/<int:notification_pk>/profile/<int:profile_pk>/', FollowNotification.as_view(), name='follow-notification'),
    # path('notification/<int:notification_pk>/thread/<int:object_pk>/', ThreadNotification.as_view(), name='thread-notification'),
    # path('notification/delete/<int:notification_pk>/', RemoveNotification.as_view(), name='notification-delete'),
    # path('inbox/create-thread/', CreateThread.as_view(), name='create-thread'),
    # path('inbox/<int:pk>/create-message', CreateMessage.as_view(), name='create-message'),
    
]
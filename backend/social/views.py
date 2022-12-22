from rest_framework import generics, permissions
from rest_framework.mixins import CreateModelMixin
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Post, Comment, UserProfile, ThreadModel, Message
from .serializers import PostSerializer, CommentSerializer, UserProfileSerializer, ThreadModelSerializer, MessageSerializer

class PostListView(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (permissions.AllowAny,)
    
        
    class Meta:
        model = Post
        fields = ('__all__')
        lookup_field = 'pk'
        ordering = ('-date_created')
        
class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    
# class PostsByUser(generics.ListAPIView):
#     serializer_class = PostSerializer
#     model = serializer_class.Meta.model
#     def get_queryset(self):
#         user_id = self.kwargs['user_id']
#         queryset = self.model.objects.filter(user_id=user_id)
#         return queryset
    
class CommentList(generics.ListCreateAPIView):
    serializer_class = CommentSerializer
    model = serializer_class.Meta.model
    permission_classes = (permissions.AllowAny, )
    def get_queryset(self):
        post_id = self.kwargs['post_pk']
        queryset = self.model.objects.filter(post_id=post_id)
        return queryset
    
    class Meta:
        model = Comment
        fields = ('__all__')
        lookup_field = 'post_pk'
        ordering = ('-date_created')


class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = (permissions.AllowAny,)
# PostDetailView
# PostEditView
class AddLike(APIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = PostSerializer
    def post(self, request, pk, *args, **kwargs):
        queryset = Post.object.get(pk=pk)
        is_dislike = False
        for dislike in queryset.dislikes.all():
            if dislike == request.user:
                is_dislike = True
                break
        if is_dislike:
            queryset.dislikes.remove(request.user)
        
        is_like = False
        for like in queryset.likes.all():
            if like == request.user:
                is_like = True
                break
        if not is_like:
            queryset.likes.add(request.user)
        if is_like:
            queryset.likes.remove(request.user)
        serializer = PostSerializer(queryset, many=True)
        return Response(serializer.data)

class AddDislike(APIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = PostSerializer
    def post(self, request, pk, *args, **kwargs):
        queryset = Post.object.get(pk=pk)
        is_like = False
        for like in queryset.likes.all():
            if like == request.user:
                is_like = True
                break
        if is_like:
            queryset.likes.remove(request.user)
        
        is_dislike = False
        for dislike in queryset.dislikes.all():
            if dislike == request.user:
                is_dislike = True
                break
        if not is_dislike:
            queryset.dislikes.add(request.user)
        if is_dislike:
            queryset.dislikes.remove(request.user)
        serializer = PostSerializer(queryset, many=True)
        return Response(serializer.data)

# class AddCommentLike(APIView):
# class AddCommentDislike(APIView):

# ProfileView
# ProfileEditView
class UserProfileList(generics.ListCreateAPIView):
    serializer_class = UserProfileSerializer
    model = serializer_class.Meta.model
    
    class Meta:
        model = UserProfile
        fields = ('__all__')
        lookup_field = 'pk'
        ordering = ('-date_created')


class UserProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    # queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    model = serializer_class.Meta.model
    permission_classes = (permissions.AllowAny,)
# AddFollower
# RemoveFollower
class ListFollowers(APIView):
    def get(self, request, pk, *args, **kwargs):
        profile = UserProfile.objects.get(pk=pk)
        followers = profile.followers.all()
        context = {
            'profile':profile,
            'followers':followers,
        }
        return Response(request, context)
# UserSearch
# PostNotification
# FollowNotification
# ThreadNotification
# RemoveNotification
# ListThreads
# CreateThread
# ThreadView
# CreateMessage
from rest_framework import generics, permissions, status, serializers
from rest_framework.views import APIView
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from .models import Post, Comment, ThreadModel, Message
from users.models import User
from .serializers import PostSerializer, CommentSerializer, GetThreadModelSerializer, MessageSerializer, CrudThreadModelSerializer
from django.contrib.auth.mixins import LoginRequiredMixin
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
    permission_classes = (permissions.AllowAny, )
    serializer_class = CommentSerializer
    
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
        
# AddFollower
# RemoveFollower

# UserSearch
# PostNotification
# FollowNotification
# ThreadNotification
# RemoveNotification
# ListThreads
class CreateThreadModel(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = CrudThreadModelSerializer
    
    class Meta:
        model = ThreadModel
        fields = ('__all__')
        ordering = ('-date_created')
        
class ThreadModelListByUser(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = GetThreadModelSerializer
    def get_queryset(self):
        user = self.kwargs['pk']
        queryset = self.Meta.model.objects.filter(user=user)
        return queryset
    class Meta:
        model = ThreadModel
        fields = ('__all__')
        ordering = ('-date_created')


class ThreadModelDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ThreadModel.objects.all()
    serializer_class = CrudThreadModelSerializer
    permission_classes = (permissions.AllowAny,)
    

class CreateMessageView(generics.CreateAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = (permissions.AllowAny, )
    
    class Meta:
        model = Message
        fields = ('__all__')
        ordering = ('-date_created')
        
class MessageList(generics.ListAPIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = MessageSerializer
    def get_queryset(self):
        thread = self.kwargs['pk']
        queryset = self.Meta.model.objects.filter(thread=thread)
        return queryset
    class Meta:
        model = Message
        fields = ('__all__')
        ordering = ('-date_created')


class MessageDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    permission_classes = (permissions.AllowAny,)
    
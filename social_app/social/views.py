# views.py
from rest_framework import generics, permissions
from rest_framework.response import Response
from .models import Post, Comment
from users.models import User
from users.serializers import UserSerializer
from .serializers import PostSerializer, CommentSerializer

class PostCreateView(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (permissions.AllowAny,)

class PostRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (permissions.AllowAny,)
    
class PostDetailWithComments(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def retrieve(self, request, *args, **kwargs):
        post = self.get_object()
        comments = Comment.objects.filter(post=post)
        # authors = User.objects.filter(id__in=[comment.author.id for comment in comments])
        author = post.author
        serializer = PostSerializer(post)
        comment_serializer = CommentSerializer(comments, many=True)
        author_serializer = UserSerializer(author)

        return Response({
            'post': serializer.data,
            'comments': comment_serializer.data,
            'author': author_serializer.data,
        })
    
# class PostCommentListView(generics.ListAPIView):
#     queryset = Comment.objects.all()
#     serializer_class = CommentSerializer
#     permission_classes = (permissions.AllowAny,)

#     def get_queryset(self):
#         post = self.kwargs['post_pk']
#         return Comment.objects.filter(post=post)

class CommentCreateView(generics.CreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = (permissions.AllowAny,)

class CommentRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = (permissions.AllowAny,)
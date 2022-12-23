from rest_framework import generics, permissions, status, serializers
from rest_framework.views import APIView
from rest_framework.generics import UpdateAPIView
from rest_framework.response import Response
from .models import Post, Comment, ThreadModel, Message
from users.models import User
from .serializers import PostSerializer, CommentSerializer, ThreadModelSerializer, MessageSerializer
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

# ProfileView
# ProfileEditView

        
# class UpdateUserProfileView(UpdateAPIView):
#      def put(self, request, *args, **kwargs):
#         try:
#             data = self.request.data
#             with open('../TextStonch.txt', 'w') as f:
#                 f.write(f'Data : {data} \n Request Data: {request.data}')
#             name = data['name']
#             user = data['user']
#             bio = data['bio']
#             birth_date = data['birth_date']
#             location = data['location']
#             picture = data['picture']
#             UserProfile.objects.filter(user=user).update(
#                 name=name, bio=bio, birth_date=birth_date,
#                 location=location, picture=picture)
#             user_profile = UserProfile.objects.get(user=user)
#             user_profile = UserProfileSerializer(user_profile)
#             profile = user_profile.save()
#             if user_profile:
#                 return Response({'data': user_profile, 'success': 'Successful Update', 'status': 200})
#             else:
#                 return Response({'data': profile, 'error': 'Error Updating', 'status': 205})
#         except:
#             return Response({'error': 'Error updating profile'})
        
        
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
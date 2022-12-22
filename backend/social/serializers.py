from rest_framework import serializers
from .models import Post, Comment, UserProfile, ThreadModel, Message
from users.models import User

class PostSerializer(serializers.ModelSerializer):
    author = serializers.PrimaryKeyRelatedField(
        # default=serializers.CurrentUserDefault(),
        # read_only = True,
        # source='username'
        queryset=User.objects.all(),
    )
    class Meta:
        model = Post
        fields = '__all__'
        read_only_fields = ('author','comments',)
        ordering = ('-date_created')
        
class CommentSerializer(serializers.ModelSerializer):
    author = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source='user'
    )
    post = serializers.PrimaryKeyRelatedField(
        queryset=Post.objects.all(),
        # source='post'
    )
    parent = serializers.PrimaryKeyRelatedField(
        queryset=Comment.objects.all(),
        source='self'
    )
    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ('post', 'author')
        ordering = ('-date_created')
        
class UserProfileSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source='self'
    )
    followers = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        # source='followers'
    )
    class Meta:
        model = UserProfile
        fields = '__all__'
        read_only_fields = ('user', 'followers')
        ordering = ('-date_created')
        
class ThreadModelSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source='self'
    )
    reciever = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source='user'
    )
    
    class Meta:
        model = ThreadModel
        fields = '__all__'
        read_only_fields = ('user', 'reciever')



class MessageSerializer(serializers.ModelSerializer):
    sender_user = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source='self'
    )
    reciever_user = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source='user'
    )
    thread = serializers.PrimaryKeyRelatedField(
        queryset=ThreadModel.objects.all(),
        # source='post'
    )
    class Meta:
        model = Message
        fields = '__all__'
        read_only_fields = ('sender_user', 'reciever_user', 'thread')
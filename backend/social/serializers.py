from rest_framework import serializers
from .models import Post, Comment, ThreadModel, Message
from users.models import User
from users.serializers import UserSerializer

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
        # source='user'
    )
    post = serializers.PrimaryKeyRelatedField(
        queryset=Post.objects.all(),
        # source='post'
    )
    # parent = serializers.PrimaryKeyRelatedField(
    #     queryset=Comment.objects.all(),
    #     source='self'
    # )
    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ('post', 'author')
        ordering = ('-date_created')
        
class CrudThreadModelSerializer(serializers.ModelSerializer):
    reciever = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        # source='user'
    )
    user = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        # source='self'
    )
    class Meta:
        model = ThreadModel
        fields = '__all__'
        read_only_fields = ('user', 'reciever')
        
class GetThreadModelSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False)
    
    reciever = UserSerializer(many=False)
    
    
    class Meta:
        model = ThreadModel
        fields = '__all__'
        read_only_fields = ('user', 'reciever')



class MessageSerializer(serializers.ModelSerializer):
    sender_user = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        
    )
    reciever_user = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        
    )
    thread = serializers.PrimaryKeyRelatedField(
        queryset=ThreadModel.objects.all(),
        # source='post'
    )
    class Meta:
        model = Message
        fields = '__all__'
        read_only_fields = ('sender_user', 'reciever_user', 'thread')
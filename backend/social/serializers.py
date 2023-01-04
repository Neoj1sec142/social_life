from rest_framework import serializers
from .models import Post, Comment, ThreadModel, Message
from users.models import User
# from users.serializers import UserSerializer

class PostSerializer(serializers.ModelSerializer):
    author = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        many=False
    )
    class Meta:
        model = Post
        fields = '__all__'
        ordering = ('-date_created')
        
class CommentSerializer(serializers.ModelSerializer):
    author = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
    )
    post = serializers.PrimaryKeyRelatedField(
        queryset=Post.objects.all(),
    )
    
    class Meta:
        model = Comment
        fields = '__all__'
        ordering = ('-date_created')
        
class ThreadModelSerializer(serializers.ModelSerializer):
    reciever = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source='sender_user'
    )
    user = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source='reciever_user'
    )
    class Meta:
        model = ThreadModel
        fields = '__all__'
        # read_only_fields = ('user', 'reciever')



class MessageSerializer(serializers.ModelSerializer):
    sender_user = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source='sent'
    )
    reciever_user = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source='gets'
    )
    thread = serializers.PrimaryKeyRelatedField(
        queryset=ThreadModel.objects.all(),
    )
    class Meta:
        model = Message
        fields = '__all__'
        # read_only_fields = ('sender_user', 'reciever_user', 'thread')
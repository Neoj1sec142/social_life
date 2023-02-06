# serializers.py
from django.core.files.base import ContentFile
from django.core.files.uploadedfile import InMemoryUploadedFile
from rest_framework import serializers
from .models import Post, Comment
from users.models import User

class PostSerializer(serializers.ModelSerializer):
    author = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    image = serializers.FileField(required=False)

    def create(self, validated_data):
        image = validated_data.get('image')
        if image:
            image_file = ContentFile(image.read())
            validated_data['image'] = InMemoryUploadedFile(
                image_file,
                None,
                image.name,
                image.content_type,
                image.size,
                image.charset
            )
        return super().create(validated_data)

    class Meta:
        model = Post
        fields = ('id', 'author', 'title', 'text', 'image', 'date_created')





class CommentSerializer(serializers.ModelSerializer):
    author = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    username = serializers.CharField(source='author.username', read_only=True)
    
    class Meta:
        model = Comment
        fields = ('id', 'author', 'username', 'post', 'text', 'date_created')

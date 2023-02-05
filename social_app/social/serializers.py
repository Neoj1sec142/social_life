# serializers.py
from django.core.files.base import ContentFile
from django.core.files.uploadedfile import InMemoryUploadedFile
from rest_framework import serializers
from .models import Post, Comment
from users.models import User

class PostSerializer(serializers.ModelSerializer):
    author = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    image = serializers.ImageField()
    def create(self, validated_data):
        image = validated_data.get('image')
        image_file = ContentFile(image.read())
        validated_data['image'] = InMemoryUploadedFile(
            image_file,
            None,
            image.name,
            image.content_type,
            image.size,
            image.charset
        )
        return validated_data
    class Meta:
        model = Post
        fields = ('id', 'author', 'title', 'text', 'image', 'date_created')

class CommentSerializer(serializers.ModelSerializer):
    author = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    class Meta:
        model = Comment
        fields = ('id', 'author', 'post', 'text', 'created_at')


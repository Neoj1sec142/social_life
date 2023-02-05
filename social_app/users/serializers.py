# serializers.py
from rest_framework import serializers
from .models import User, Follow

class FollowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Follow
        fields = ('id', 'follower', 'followee')

class UserSerializer(serializers.ModelSerializer):
    followers = FollowSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'followers')
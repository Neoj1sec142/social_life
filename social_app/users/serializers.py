# serializers.py
from rest_framework import serializers
from .models import User, Follow
from rest_framework import serializers
from .models import User

class FollowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Follow
        fields = ('id', 'follower', 'followee')

class UserSerializer(serializers.ModelSerializer):
    followers = FollowSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = ['username', 'is_active', 'id', 'followers']
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
    
class UserDetailSerializer(serializers.ModelSerializer):
    followers = FollowSerializer(many=True, read_only=True)
    class Meta:
        model = User
        fields = ['username', 'is_active', 'is_staff', 'email', 'id', 'first_name', 'last_name', 'followers']





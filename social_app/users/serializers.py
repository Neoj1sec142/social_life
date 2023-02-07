# serializers.py
from rest_framework import serializers
from .models import User, Follow

class FollowSerializer(serializers.ModelSerializer):
    follower_name = serializers.CharField(source='follower.username', read_only=True)
    followee_name = serializers.CharField(source='followee.username', read_only=True)
    follower = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    followee = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    class Meta:
        model = Follow
        fields = ('id', 'follower', 'followee', 'follower_name', 'followee_name')

class UserSerializer(serializers.ModelSerializer):
    followers = serializers.StringRelatedField(many=True, read_only=True)
    class Meta:
        model = User
        fields = ['username', 'is_active', 'id', 'followers']
    
    
class UserDetailSerializer(serializers.ModelSerializer):
    followers = serializers.StringRelatedField(many=True, read_only=True)
    class Meta:
        model = User
        fields = ('username', 'password', 'is_active', 'is_staff', 'email', 'id', 'first_name', 'last_name', 'followers')
        extra_kwargs = {'password': {'write_only': True}}
    def create(self, validated_data):
        instance = self.Meta.model(**validated_data)
        instance.set_password(validated_data['password'])
        instance.save()
        return instance





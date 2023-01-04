from rest_framework import serializers
from .models import User, UserFollowing
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class UserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    username = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)
    
    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {'write_only': True}
        extra_fields = ('posts',)
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("__all__")
        lookup_field = 'username'



class UserFollowingSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        many=True,
        source='following'
    )
    following_user = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        many=True,
        source='followers'
    )
    class Meta:
        model = UserFollowing
        fields = '__all__'
        # read_only_fields = ['user',]
        ordering = ('-date_created')


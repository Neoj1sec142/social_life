from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    followers = models.ManyToManyField(
        'self',
        related_name='following',
        through='Follow',
        symmetrical=False,
    )
    def __str__(self):
        return self.username
    
class Follow(models.Model):
    follower = models.ForeignKey(User, on_delete=models.CASCADE, related_name='following_relation')
    followee = models.ForeignKey(User, on_delete=models.CASCADE, related_name='follower_relation')
    def __str__(self):
        return f'{self.follower} is following {self.followee}'
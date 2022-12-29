from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

class User(AbstractUser):
    
    def __str__(self):
        return self.username
    
class UserProfile(models.Model):
    user = models.OneToOneField(User, primary_key=True, verbose_name='user', on_delete=models.CASCADE, related_name='profile')
    name = models.CharField(max_length=30, blank=True, null=True)
    bio = models.TextField(max_length=500, blank=True, null=True)
    birth_date = models.CharField(blank=True, null=True, max_length=50)
    location = models.CharField(max_length=100, blank=True, null=True)
    picture = models.ImageField(upload_to='uploads/profile_pictures', default='uploads/profile_pictures/default.jpg', blank=True)
    # followers = models.ManyToManyField(User, blank=True, related_name='followers', null=True)
    date_created = models.DateTimeField(auto_now=True, null=True, blank=True)
    date_modified = models.DateTimeField(auto_now=True, null=True, blank=True)
    
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created,  **kwargs):
    if created:
        UserProfile.objects.create(user=instance)
@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
    
class UserFollowing(models.Model):
    user = models.OneToOneField("User", on_delete=models.CASCADE, related_name="following", unique=True)
    following_user = models.OneToOneField("User", on_delete=models.CASCADE, related_name="followers", unique=True)
    date_created = models.DateTimeField(auto_now=True, null=True, blank=True)
    def __str__(self):
        return self.following_user

from django.db import models
from users.models import User

class Post(models.Model):
    body = models.TextField()
    image = models.ImageField(upload_to='uploads/post_photos', blank=True, null=True)
    date_created = models.DateTimeField(auto_now=True, null=True, blank=True)
    date_modified = models.DateTimeField(auto_now=True, null=True, blank=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    likes = models.ManyToManyField(User, blank=True, related_name='likes')
    dislikes = models.ManyToManyField(User, blank=True, related_name='dislikes')
    def __str__(self):
        return self.body
    
class Comment(models.Model):
    likes = models.ManyToManyField(User, blank=True, related_name='comment_likes')
    dislikes = models.ManyToManyField(User, blank=True, related_name='comment_dislikes')
    comment = models.TextField()
    date_created = models.DateTimeField(auto_now=True, null=True, blank=True)
    date_modified = models.DateTimeField(auto_now=True, null=True, blank=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    def __str__(self):
        return self.comment
    
class ThreadModel(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sender_user')
    reciever = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reciever_user')
    date_created = models.DateTimeField(auto_now=True, null=True, blank=True)
    date_modified = models.DateTimeField(auto_now=True, null=True, blank=True)
    def __str__(self):
        return self.date_created
    
class Notification(models.Model):
    # 1 = Like 2 = Comment 3 = Follow, 4 = DM
    notification_type = models.IntegerField()
    to_user = models.ForeignKey(User, related_name='notification_to', on_delete=models.CASCADE, null=True)
    from_user = models.ForeignKey(User, related_name='notification_from', on_delete=models.CASCADE, null=True)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='+', blank=True, null=True)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE, related_name='+', blank=True, null=True)
    thread = models.ForeignKey(ThreadModel, on_delete=models.CASCADE, related_name='+', blank=True, null=True)
    date_created = models.DateTimeField(auto_now=True, null=True, blank=True)
    date_modified = models.DateTimeField(auto_now=True, null=True, blank=True)
    user_has_seen = models.BooleanField(default=False)
    def __str__(self):
        return self.notification_type
    
class Message(models.Model):
    thread = models.ForeignKey(ThreadModel, on_delete=models.CASCADE, related_name='+', blank=True, null=True)
    sender_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sent')
    reciever_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='gets')
    body = models.CharField(max_length=1000)
    image = models.ImageField(upload_to='uploads/message_photos', blank=True, null=True)
    date_created = models.DateTimeField(auto_now=True, null=True, blank=True)
    date_modified = models.DateTimeField(auto_now=True, null=True, blank=True)
    is_read = models.BooleanField(default=False, blank=True)
    def __str__(self):
        return self.body

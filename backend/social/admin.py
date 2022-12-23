from django.contrib import admin
from .models import Post, Comment, Notification, ThreadModel, Message
# Register your models here.
admin.site.register(Post)
admin.site.register(Comment)

admin.site.register(Notification)
admin.site.register(ThreadModel)
admin.site.register(Message)

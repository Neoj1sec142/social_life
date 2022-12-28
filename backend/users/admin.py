from django.contrib import admin
from .models import User, UserProfile, UserFollowing

class UserAdmin(admin.ModelAdmin):
    model = User

admin.site.register(User, UserAdmin)
admin.site.register(UserProfile)
admin.site.register(UserFollowing)

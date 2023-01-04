from django.contrib import admin
from .models import User, UserFollowing

class UserAdmin(admin.ModelAdmin):
    model = User

admin.site.register(User, UserAdmin)
admin.site.register(UserFollowing)

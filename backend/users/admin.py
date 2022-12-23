from django.contrib import admin
from .models import User, UserProfile

class UserAdmin(admin.ModelAdmin):
    model = User

admin.site.register(User, UserAdmin)
admin.site.register(UserProfile)
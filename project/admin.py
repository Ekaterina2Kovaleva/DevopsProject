from django.contrib import admin
from .models import Type, DesignProject, ReleasedProject, Photo
# Register your models here.

admin.site.register(Type)
admin.site.register(DesignProject)
admin.site.register(ReleasedProject)
admin.site.register(Photo)

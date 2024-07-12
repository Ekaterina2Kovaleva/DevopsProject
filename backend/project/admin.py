from django.contrib import admin
from .models import Project, Photo, Request, Tariff
# Register your models here.

admin.site.register(Project)
admin.site.register(Photo)
admin.site.register(Request)
admin.site.register(Tariff)
from django.shortcuts import render
from rest_framework import viewsets
from .models import ReleasedProject, DesignProject, Type, Photo
from .serializers import ReleasedProjectSerializer, DesignProjectSerializer, PhotoSerializer, TypeSerializer

class ReleasedProjectViewSet(viewsets.ModelViewSet):
    queryset = ReleasedProject.objects.all()
    serializer_class = ReleasedProjectSerializer

class DesignProjectViewSet(viewsets.ModelViewSet):
    queryset = DesignProject.objects.all()
    serializer_class = DesignProjectSerializer

class TypeViewSet(viewsets.ModelViewSet):
    queryset = Type.objects.all()
    serializer_class = TypeSerializer

class PhotoViewSet(viewsets.ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer
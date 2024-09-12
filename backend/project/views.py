from django.shortcuts import render
from rest_framework import viewsets, generics, permissions
from .models import Project, Photo, Request, Tariff, DesignPhoto
from .serializers import ProjectSerializer, PhotoSerializer, RequestSerializer, TariffSerializer, DesignPhotoSerializer
from rest_framework.permissions import IsAdminUser

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class PhotoViewSet(viewsets.ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer

class RequestViewSet(viewsets.ModelViewSet):
    queryset = Request.objects.all()
    serializer_class = RequestSerializer

class TariffViewSet(viewsets.ModelViewSet):
    queryset = Tariff.objects.all()
    serializer_class = TariffSerializer

class DesignPhotoViewSet(viewsets.ModelViewSet):
    queryset = DesignPhoto.objects.all()
    serializer_class = DesignPhotoSerializer
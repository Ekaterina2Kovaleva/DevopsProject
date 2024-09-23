from rest_framework import serializers
from .models import Photo, Project, Request, Tariff, DesignPhoto

class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):

    photos = PhotoSerializer(many=True, read_only=True)
    class Meta:
        model = Project
        fields = ('name', 'place', 'square', 'square', 'realization', 'inf', 'mainImg', 'photos')

class RequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Request
        fields = '__all__'

class TariffSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tariff
        fields = '__all__'

class DesignPhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = DesignPhoto
        fields = '__all__'

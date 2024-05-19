from rest_framework import serializers
from .models import Photo, Type, DesignProject, ReleasedProject

class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = '__all__'

class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = '__all__'

class DesignProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = DesignProject
        fields = '__all__'

class ReleasedProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReleasedProject
        fields = '__all__'


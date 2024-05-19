from django.core.validators import FileExtensionValidator
from django.db import models
from .services import get_path_upload_image, validate_size_image

class Type(models.Model):
    name = models.CharField(verbose_name="Тип дома", max_length=255, null=True)
    def __str__(self):
        return self.name

class Photo(models.Model):
    name = models.CharField(verbose_name="Название фото", max_length=255)
    image = models.ImageField(
        upload_to=get_path_upload_image,
        blank=True,
        null=True,
        validators=[FileExtensionValidator(allowed_extensions=['jpg']), validate_size_image]
    )

    def __str__(self):
        return self.name

class ReleasedProject(models.Model):
    mainPhoto = models.ImageField(
        upload_to=get_path_upload_image,
        blank=True,
        null=True,
        validators=[FileExtensionValidator(allowed_extensions=['jpg']), validate_size_image]
    )
    name = models.CharField(verbose_name="Название дизайн-проекта", max_length=255, null=True, blank=True)
    location = models.CharField(verbose_name="Город", max_length=255)
    type = models.ForeignKey(Type, on_delete= models.CASCADE)
    complexName = models.CharField(verbose_name="Название жилого комплекса", max_length=255, null=True, blank=True)
    square = models.IntegerField(verbose_name="Площадь объекта", null=True, blank=True)
    description = models.TextField(verbose_name="Описание")
    photos = models.ManyToManyField(Photo)

    def __str__(self):
        return self.name


class DesignProject(models.Model):
    name = models.CharField(verbose_name="Название дизайн-проекта", max_length=255, null=True, blank=True)
    location = models.CharField(verbose_name="Город", max_length=255)
    type = models.ForeignKey(Type, on_delete=models.CASCADE)
    complexName = models.CharField(verbose_name="Название жилого комплекса", max_length=255, null=True, blank=True)
    square = models.IntegerField(verbose_name="Площадь объекта", null=True, blank=True)
    photos = models.ManyToManyField(Photo)

    def __str__(self):
        return self.name







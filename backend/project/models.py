from django.core.validators import FileExtensionValidator
from django.db import models
from .services import get_path_upload_image, validate_size_image

class Project(models.Model):

    name = models.CharField(verbose_name="Название дизайн-проекта", max_length=255, null=True, blank=True)
    place = models.CharField(verbose_name="Город", max_length=255)
    square = models.FloatField(verbose_name="Площадь объекта", null=True, blank=True)
    realization = models.BooleanField(verbose_name="Реализован", default=False)
    inf = models.TextField(verbose_name="Описание")
    mainImg = models.ImageField(
        upload_to=get_path_upload_image,
        blank=True,
        null=True,
        validators=[FileExtensionValidator(allowed_extensions=['jpg']), validate_size_image]
    )

    def __str__(self):
        return self.name



    
class Photo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="photos", null=True, blank=True)
    real = models.BooleanField(verbose_name="Дизайн", default=False)
    image = models.ImageField()

class DesignPhoto(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="design_photos", null=True, blank=True)
    image = models.ImageField()

class Request(models.Model):
    name = models.CharField(verbose_name="ФИО", max_length=255)
    info = models.CharField(verbose_name="email/номер телефона", max_length=255)
    message = models.TextField(verbose_name="Сообщение")

    def __str__(self):
        return self.name
    
class Tariff(models.Model):
    name = models.CharField(verbose_name="Название тарифа", max_length=255)
    price = models.IntegerField(verbose_name="Цена проекта за кв. м")
    description = models.TextField(verbose_name="Описание")
    mainImg = models.ImageField(
        upload_to=get_path_upload_image,
        blank=True,
        null=True,
        validators=[FileExtensionValidator(allowed_extensions=['jpg']), validate_size_image]
    )

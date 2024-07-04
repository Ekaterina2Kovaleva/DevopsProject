from django.core.validators import FileExtensionValidator
from django.db import models
from .services import get_path_upload_image, validate_size_image

class Photo(models.Model):
    name = models.CharField(verbose_name="Название фото", max_length=255)
    isDesign = models.BooleanField(verbose_name="Дизайн/Реальное фото", default=False)
    image = models.ImageField(
        upload_to=get_path_upload_image,
        blank=True,
        null=True,
        validators=[FileExtensionValidator(allowed_extensions=['jpg']), validate_size_image]
    )

    def __str__(self):
        return self.name

class Project(models.Model):
    name = models.CharField(verbose_name="Название дизайн-проекта", max_length=255, null=True, blank=True)
    place = models.CharField(verbose_name="Город", max_length=255)
    square = models.FloatField(verbose_name="Площадь объекта", null=True, blank=True)
    realization = models.BooleanField(verbose_name="Реализован/Нереализован", default=False)
    inf = models.TextField(verbose_name="Описание")
    mainImg = models.ImageField(
        upload_to=get_path_upload_image,
        blank=True,
        null=True,
        validators=[FileExtensionValidator(allowed_extensions=['jpg']), validate_size_image]
    )
    photos = models.ManyToManyField(Photo)

    def __str__(self):
        return self.name

class Request(models.Model):
    name = models.CharField(verbose_name="ФИО", max_length=255)
    info = models.CharField(verbose_name="email/номер телефона", max_length=255)
    message = models.TextField(verbose_name="Сообщение")

    def __str__(self):
        return self.name







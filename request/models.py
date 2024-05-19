from django.db import models


class Request(models.Model):
    name = models.CharField(verbose_name="ФИО", max_length=255)
    info = models.CharField(verbose_name="email/номер телефона", max_length=255)
    message = models.TextField(verbose_name="Сообщение")

    def __str__(self):
        return self.name

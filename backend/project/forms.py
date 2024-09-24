# -*- coding: utf-8 -*-
from django import forms
from django.core.validators import validate_image_file_extension
from django.utils.translation import gettext as _


from .models import Project, Photo, DesignPhoto

class MultipleFileInput(forms.ClearableFileInput):
    allow_multiple_selected = True

class MultipleFileField(forms.FileField):
    def __init__(self, *args, **kwargs):
        kwargs.setdefault("widget", MultipleFileInput())
        super().__init__(*args, **kwargs)

    def clean(self, data, initial=None):
        single_file_clean = super().clean
        if isinstance(data, (list, tuple)):
            result = [single_file_clean(d, initial) for d in data]
        else:
            result = [single_file_clean(data, initial)]
        return result


class FileFieldForm(forms.Form):
    file_field = MultipleFileField()

class ProjectAdminForm(forms.ModelForm):
    class Meta:
        model = Project
        fields = '__all__'

    photos = MultipleFileField(
        widget=MultipleFileInput(),
        label=_("Добавить фотографии"),
        required=False,
    )

    design_photos = MultipleFileField(
        widget=MultipleFileInput(),
        label=_("Добавить дизайн-фотографии"), 
        required=False,
    )


    def clean_photos(self):
        for upload in self.files.getlist("photos"):
            validate_image_file_extension(upload)

    def save_photos(self, project):
        for upload in self.files.getlist("photos"):
            photo = Photo(project=project, image=upload, real=False)
            photo.save()

    def clean_design_photos(self):
        for upload in self.files.getlist("design_photos"):
            validate_image_file_extension(upload)

    def save_design_photos(self, project):
        for upload in self.files.getlist("design_photos"):
            photo = Photo(project=project, image=upload, real=True)
            photo.save()



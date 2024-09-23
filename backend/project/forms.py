from django import forms
from django.core.validators import validate_image_file_extension
from django.utils.translation import gettext as _


from .models import Project, Photo, DesignPhoto


class ProjectAdminForm(forms.ModelForm):
    class Meta:
        model = Project
        fields = '__all__'

    photos = forms.FileField(
        widget=forms.ClearableFileInput(attrs={"multiple": True}),
        label=_("Добавить фотографии"), 
        required=False,
    )

    design_photos = forms.FileField(
        widget=forms.ClearableFileInput(attrs={"multiple": True}),
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



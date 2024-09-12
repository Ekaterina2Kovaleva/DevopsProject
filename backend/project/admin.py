from django.contrib import admin
from .models import Project, Photo, Request, Tariff, DesignPhoto
from .forms import ProjectAdminForm
from django.template.loader import get_template
from django.utils.translation import gettext as _

class ProjectPhotoInline(admin.TabularInline):
    model = Photo  
    fields = ("showphoto_thumbnail",)
    readonly_fields = ("showphoto_thumbnail",)
    max_num = 0
 
    def showphoto_thumbnail(self, instance):
        """Поле, которое возвращает миниатюру изображения"""
        tpl = get_template("admin/show_thumbnail.html")
        return tpl.render({"photo": instance.image})

    showphoto_thumbnail.short_description = _("Все фотографии")


@admin.register(Project)
class ShowAdmin(admin.ModelAdmin):
    form = ProjectAdminForm
    inlines = [ProjectPhotoInline]

    def save_related(self, request, form, formsets, change):
        super().save_related(request, form, formsets, change)
        form.save_photos(form.instance)
        form.save_design_photos(form.instance)


admin.site.register(Photo)
admin.site.register(DesignPhoto)
admin.site.register(Request)
admin.site.register(Tariff)
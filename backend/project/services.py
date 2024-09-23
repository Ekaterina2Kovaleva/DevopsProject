from django.core.exceptions import ValidationError


def get_path_upload_image(instance, file):
    return f'image/{instance.name}/{file}'


def validate_size_image(file_obj):
    megabyte_limit = 25
    if file_obj.size > megabyte_limit * 1024 * 1024:
        raise ValidationError(f"Максимальный размер файла {megabyte_limit}МБ")
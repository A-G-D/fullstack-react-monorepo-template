# Generated by Django 4.1.2 on 2023-03-16 05:34

from django.db import migrations


def add_default_admin(apps, schema_editor):
    User = apps.get_model("users", "User")
    User.objects.create_superuser("admin_user", None, "admin_password")


class Migration(migrations.Migration):
    dependencies = [
        ("users", "0001_initial"),
    ]

    operations = [
        migrations.RunPython(add_default_admin, migrations.RunPython.noop),
    ]

# Generated by Django 4.0.4 on 2022-08-21 11:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_project', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='test_num',
            field=models.IntegerField(default=0, verbose_name='文件数'),
        ),
    ]
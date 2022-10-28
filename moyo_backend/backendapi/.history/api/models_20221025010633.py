import datetime
from distutils.command.upload import upload
from email.mime import image
from time import timezone
from urllib.parse import MAX_CACHE_SIZE
from django.db import models
import datetime


# Create your models here.
class Product(models.Model):
    item = models.CharField(max_length=200, blank=False, null=False)
    image = models.ImageField(upload_to='images/')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    countryOfOrigin = models.CharField(max_length=200, blank=False, null=False)
    date_created = models.DateTimeField(timezone.now())


class Expense(models.Model):
    item = models.CharField(max_length=200, blank=False, null=False)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    date_created = models.DateTimeField(timezone.now())

# Declare Revenue


class Revenue(models.Model):
    item = models.CharField(max_length=200, blank=False, null=False)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    date_created = models.DateTimeField(timezone.now())

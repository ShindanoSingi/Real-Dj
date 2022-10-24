from urllib.parse import MAX_CACHE_SIZE
from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.TextField(max_length=3, blank=False, null=False)
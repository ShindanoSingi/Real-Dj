from urllib.parse import MAX_CACHE_SIZE
from django.db import models

# Create your models here.
class Product(models.Model):
    item = models.TextField(max_length=200, blank=False, null=False)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    countryOfOrigin = models.CharField(max_length=200, blank=False, null=False)
    date_created = models.DateTimeField()
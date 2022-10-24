from django.contrib import admin
from .models import Revenue, Product, Expense

# Register your models here.
admin.site.register(Product, Expense, Revenue)

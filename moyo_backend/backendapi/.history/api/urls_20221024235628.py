from django.contrib import admin
from django.db import router
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import UserViewSet, ProductSerializer, ExpenseSerializer, RevenueSerializer

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('products', ProductSerializer)
router.register('revenues', RevenueSerializer)
router.register('expenses', ExpenseSerializer)

urlpatterns = [
    path('', include(router.urls)),
]

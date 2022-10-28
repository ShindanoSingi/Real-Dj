from itertools import product
from rest_framework import viewsets
from django.contrib.auth.models import User
from .serializers import UserSerializer
from .models import Product, Expense, Revenue


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = Expense.objects.all()
    serializer_class = UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = Revenue.objects.all()
    serializer_class = UserSerializer

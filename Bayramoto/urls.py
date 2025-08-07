from django.urls import path
from . import views

urlpatterns = [
    path('', views.maintenance),
    path('home/', views.maintenance),
]

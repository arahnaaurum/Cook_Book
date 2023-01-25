from django.conf.urls import include
from django.urls import path
from rest_framework import routers
from . import views


router = routers.DefaultRouter()
router.register(r'recipes', views.RecipesViewset)


urlpatterns = [
    path('', include(router.urls)),
]

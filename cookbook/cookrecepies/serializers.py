from .models import *
from rest_framework import serializers


class RecipesSerializer(serializers.HyperlinkedModelSerializer):
   class Meta:
       model = Recepies
       fields = ['title', 'text', 'category' ]

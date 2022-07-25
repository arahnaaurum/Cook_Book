from django.contrib import admin
from cookrecepies.models import Recepies

class RecepiesAdmin(admin.ModelAdmin):
    pass

admin.site.register(Recepies, RecepiesAdmin)
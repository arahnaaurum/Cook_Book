from django.contrib import admin
from django.conf.urls import include
from django.urls import path

from django.views.generic import TemplateView

urlpatterns = [
    path('', include('cookrecepies.urls')),
    path('admin/', admin.site.urls),
    path('swagger-ui/', TemplateView.as_view(
        template_name='swagger-ui.html',
        extra_context={'schema_url':'openapi-schema'}
    ), name='swagger-ui'),
]

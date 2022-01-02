from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class ShopConfig(AppConfig):
    name = 'shop'
    verbose_name = _('Shop')
    verbose_name_plural = _('Shop')
    default_auto_field = 'django.db.models.BigAutoField'

    def ready(self):
        from . import signals

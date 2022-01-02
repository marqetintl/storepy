# Generated by Django 3.2.2 on 2021-12-25 14:47

from decimal import Decimal
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('miq', '0017_alter_index_sections'),
        ('shop', '0004_product_slug_public'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='cover',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='miq.image', verbose_name='Cover'),
        ),
        migrations.AddField(
            model_name='category',
            name='slug_public',
            field=models.SlugField(blank=True, max_length=100, null=True, unique=True),
        ),
        migrations.AddField(
            model_name='product',
            name='cost',
            field=models.DecimalField(blank=True, decimal_places=2, help_text='FOB Price, excluding inbound shipping, taxes and others costs', max_digits=10, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='is_on_sale',
            field=models.BooleanField(default=False, verbose_name='Is on sale'),
        ),
        migrations.AddField(
            model_name='product',
            name='retail_price',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True, validators=[django.core.validators.MinValueValidator(Decimal('0.01'))]),
        ),
        migrations.AddField(
            model_name='product',
            name='sale_price',
            field=models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True, validators=[django.core.validators.MinValueValidator(0)]),
        ),
        migrations.CreateModel(
            name='ProductSize',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField(default=uuid.uuid4, editable=False, max_length=100, unique=True)),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='creation date and time')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='update date and time')),
                ('name', models.CharField(help_text='Select size', max_length=20)),
                ('code', models.CharField(max_length=10)),
                ('quantity', models.PositiveIntegerField(default=1, help_text='Enter quantity', validators=[django.core.validators.MinValueValidator(0)])),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sizes', to='shop.product')),
            ],
            options={
                'verbose_name': 'Size',
                'verbose_name_plural': 'Sizes',
                'ordering': ('created', 'name'),
            },
        ),
    ]

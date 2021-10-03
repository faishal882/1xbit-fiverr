from django.urls import path
from .views import place_single_bet_view, place_multi_bet_view

app_name = 'betapp'

urlpatterns = [
    path('single-bet/', place_single_bet_view, name='place-single-bet'),
    path('multi-bet/', place_multi_bet_view, name='place-multi-bet')
]
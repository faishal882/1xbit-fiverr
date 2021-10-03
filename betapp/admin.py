from django.contrib import admin
from .models import SingleBet, MultiBet

class SingleBetAdmin(admin.ModelAdmin):
    list_display = [ 'fixture', 'bet_amount', 'odds', 'bet_description', 'bet_result']
    list_filter = ('bet_result',)
    show_full_result_count = True

admin.site.register(SingleBet, SingleBetAdmin)
admin.site.register(MultiBet, SingleBetAdmin)
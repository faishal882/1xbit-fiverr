from rest_framework import serializers
from .models import SingleBet, MultiBet

class SingleBetSerializer(serializers.ModelSerializer):
  class Meta:
        model = SingleBet
        fields = ['fixture', 'bet_amount', 'odds', 'bet_description', "bet_result"]

class MultiBetSerializer(serializers.ModelSerializer):
  class Meta:
        model = MultiBet
        fields = ['fixture', 'bet_amount', 'odds', 'bet_description', "bet_result"]

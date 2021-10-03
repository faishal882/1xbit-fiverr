from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator




class SingleBet(models.Model):

    BET_RESULTS = ((0, "LOST"),
                   (1, "WON"),
                   (2, "PENDING")
                   )
    fixture = models.CharField(null=False, default="Hometeam-Awayteam", max_length=224)
    bet_amount = models.DecimalField(validators=[MinValueValidator(0.01)], max_digits=6, decimal_places=2)
    odds = models.DecimalField(validators=[MaxValueValidator(150, message="Sorry! Odds less than 150 is allowed")], max_digits=8, decimal_places=3, default=0.00)
    bet_description = models.CharField(null=False, default="Awayteam win / Draw", max_length=74)
    bet_result = models.IntegerField(default=2, blank=True, choices=BET_RESULTS)


class MultiBet(models.Model):
    
    BET_RESULTS = ((0, "LOST"),
                   (1, "WON"),
                   (2, "PENDING")
                   )
    fixture = models.CharField(null=False, default="Hometeam-Awayteam", max_length=500)
    bet_amount = models.DecimalField(validators=[MinValueValidator(0.01)], max_digits=6, decimal_places=2)
    odds = models.DecimalField(validators=[MaxValueValidator(150, message="Sorry! Odds less than 150 is allowed")], max_digits=8, decimal_places=3, default=0.00)
    bet_description = models.CharField(null=False, default="Awayteam win / Draw", max_length=200)
    bet_result = models.IntegerField(default=2, blank=True, choices=BET_RESULTS)
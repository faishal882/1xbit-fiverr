from .serializers import SingleBetSerializer, MultiBetSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view



@api_view(['POST'])
def place_single_bet_view(request):
    if request.method == 'POST':
        serializer = SingleBetSerializer(data=request.data)
        data = {}
        if serializer.is_valid():
            bet_slip = serializer.save()
           
            data['response'] = 'succesfully added new slip'
            data['fixture'] = bet_slip.fixture
            data["bet_amount"] = bet_slip.bet_amount
            data["bet_description"] = bet_slip.bet_description
        else:
            data = serializer.errors
        return Response(data)


@api_view(['POST'])
def place_multi_bet_view(request):
    if request.method == 'POST':
        serializer = MultiBetSerializer(data=request.data)
        data = {}
        if serializer.is_valid():
            bet_slip = serializer.save()
           
            data['response'] = 'succesfully added new bet-slips'
            data['fixture'] = bet_slip.fixture
            data["bet_amount"] = bet_slip.bet_amount
            data["bet_description"] = bet_slip.bet_description
        else:
            data = serializer.errors
        return Response(data)
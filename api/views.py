from django.shortcuts import render
from .models import Plan

from .serializers import PlanSerializer

from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView
# Create your views here.

class PlanList(ListAPIView):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializer

class CreatePlan(CreateAPIView):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializer

class DeletePlan(DestroyAPIView):
    queryset = Plan.objects.all()
    serializer_class = PlanSerializer



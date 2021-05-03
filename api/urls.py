from django.urls import path
from . import views

urlpatterns = [
    # path('listView'),
    path('listView', views.PlanList.as_view()),
    path('createPlan', views.CreatePlan.as_view()),
    path('deletePlan/<int:id>', views.DeletePlan.as_view())
]

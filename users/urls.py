from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="twitter"),
    path("<str:username>", views.profile, name="profile"),
    path("login", views.login, name="login"),
    path("register",  views.register, name="register")
]
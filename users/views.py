from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request, "users/index.html")

def login(request):
    return HttpResponse("Login")

def register(request):
    return HttpResponse("Registration page")

def profile(request, username):
    return HttpResponse(f"{username.capitalize()}")
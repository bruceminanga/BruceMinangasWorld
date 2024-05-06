from django.shortcuts import render

# Create your views here.
def home(request):
    # Render the HTML template index.html
    return render(request, "index.html")

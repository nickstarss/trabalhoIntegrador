from django.shortcuts import render
from django.http import HttpResponse

def abre_index(request):
    mensagem = "Olá, muito bom dia!"
    return HttpResponse(mensagem)

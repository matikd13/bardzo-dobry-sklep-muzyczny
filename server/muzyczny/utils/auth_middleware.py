import requests
from django.contrib.auth import login

from muzyczny import settings
from muzyczny.accounts.models.user import User


class AuthMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):

        auth_header = request.META.get('HTTP_AUTHORIZATION')

        print(auth_header)

        if auth_header:
            response = requests.get(f"{settings.AUTH0_DOMAIN}/userinfo", headers={
                'Authorization': auth_header,
            })
            if response.status_code == 200:
                print(response.json())
                user, _ = User.objects.get_or_create(email=response.json()["email"])
                if user.first_login:
                    user.first_name = response.json()["given_name"]
                    user.last_name = response.json()["family_name"]
                    user.first_login = False
                    user.save()
                login(request, user)

        response = self.get_response(request)

        return response

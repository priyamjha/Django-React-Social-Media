import requests

url = "http://127.0.0.1:8000/api/create_post/"

# ✅ send JWT in cookie instead of header
cookies = {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzU2Mzk0Nzg1LCJpYXQiOjE3NTYzOTQ0ODUsImp0aSI6ImRkMGI2MDA4NDFjNzQ5Mjg4MjRhY2Q0ODc2ZTA1OGM2IiwidXNlcl9pZCI6InBqIn0.0gG1bCoyt46WlC9DrM4fBzAG6S1jGKNYj38A_SW8JEw"
}

data = {
    "description": "hellooooo"
}

files = {
    "post_image": open(r"C:\Users\Priyam\Pictures\reddit-avatar.png", "rb")
}

response = requests.post(url, cookies=cookies, data=data, files=files)
print(response.json())

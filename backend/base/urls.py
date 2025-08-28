from django.urls import path

from django.conf import settings
from django.conf.urls.static import static

from .views import get_user_profile_data, CustomTokenObtainPairView, CustomTokenRefreshView, register, authenticated, toggleFollow, get_users_posts, toggleLike, create_post, get_posts, search_users, update_user_details, logout


urlpatterns = [
    
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', CustomTokenRefreshView.as_view(), name='token_refresh'),
    
    path('user_data/<str:pk>/', get_user_profile_data, name='user-profile-data'),
    path('register/', register, name='register'),
    path('authenticated/', authenticated, name='authenticated'),
    path('toggle_follow/', toggleFollow, name='toggle-follow'),
    path('posts/<str:pk>/', get_users_posts, name='posts'),
    path('togglelike/', toggleLike, name='toggle-like'),
    path('create_post/', create_post, name='create-post'),
    path('get_posts/', get_posts, name='get-post'),
    path('search/', search_users, name='search-users'),
    path('update_user/', update_user_details, name='update-user-details'),
    path('logout/', logout, name='logout'),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
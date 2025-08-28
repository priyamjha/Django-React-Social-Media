import axios from "axios";
import { SERVER_URL } from "../constants/constants.js";

const BASE_URL = SERVER_URL;

const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
});


api.interceptors.response.use(
    (response) => response,
    async error => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                await refresh_token();
                return api(originalRequest);
            } catch (refreshError) {
                window.location.href = '/login'; // Redirect to login on refresh token failure
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
)

// Note: Use backticks (` `) for template literals so that ${username} is replaced
// with the actual value instead of being sent literally in the URL.
export const get_user_profile_data = async (username) => {
    const response = await api.get(`/user_data/${username}/`);
    return response.data;
};


const refresh_token = async () => {
    const response = await api.post('/token/refresh/');
    return response.data;
}


export const login = async (username, password) => {
    const response = await api.post('/token/', { username, password });
    return response.data;
}


export const register = async (username, email, firstName, lastName, password) => {
    const response = await api.post('/register/', { username, email, first_name:firstName, last_name:lastName, password });
    return response.data;
}

export const get_auth = async () => {
    const response = await api.get(`/authenticated/`);
    return response.data;
};


export const toggleFollow = async (username) => {
    const response = await api.post('/toggle_follow/', {username: username});
    return response.data;
}


export const get_users_posts = async (username) => {
    const response = await api.get(`/posts/${username}/`);
    return response.data;
}


export const toggleLike = async (id) =>{
    const response =await api.post(`/togglelike/`, {id:id});
    return response.data;
}


export const create_post = async (values) => {
    const response = await api.post('/create_post/', values, {headers:{"Content-Type": "multipart/form-data"}});
    return response.data;
};


export const get_posts = async (num) => {
    const response = await api.get(`/get_posts/?page=${num}`);
    return response.data;
}


export const search_users = async (search) => {
    const response = await api.get(`/search/?query=${search}`);
    return response.data;
}


export const logout = async () => {
    const response = await api.post(`/logout/`);
    return response.data;
}


export const update_user = async (values) => {
    const response = await api.patch(`/update_user/`, values, {headers:{"Content-Type": "multipart/form-data"}});
    return response.data;
}
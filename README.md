# 🌐 Django + React Social Media Platform

A **full-stack social media platform** built with **Django (backend)** and **React (frontend)**.
This project demonstrates how to build a production-ready web application with **secure authentication, user profiles, posts, likes/dislikes, and follow/unfollow functionality**.

---

## 🚀 Features

* **Authentication & Authorization**

  * Secure login & registration system with **JWT Authentication**
  * JWT stored in **HTTP-only cookies** (prevents XSS attacks)
  * `PrivateRoute` in React to restrict access if user is not authenticated

* **User System**

  * Custom User model in Django
  * User profile page with details & settings
  * Follow/unfollow functionality

* **Posts System**

  * Create, edit, and delete posts
  * Like/Dislike functionality
  * Paginated Home Feed to display posts

* **Search & Explore**

  * Search for other users by username

* **Account Settings**

  * Update profile details
  * Logout functionality

---

## 🛠️ Tech Stack

**Backend (Django + DRF)**

* Django (Custom User Model)
* Django REST Framework (API development)
* JWT Authentication (via `djangorestframework-simplejwt`)

**Frontend (React + Context API)**

* React (functional components & hooks)
* Context API for global authentication state
* React Router (for navigation & private routes)

**Database**

* SQLite (for development, can switch to PostgreSQL/MySQL in production)

---

## 📂 Project Structure

```bash
social-media-app/
│
├── backend/              # Django project
│   ├── manage.py
│   ├── core/             # Main Django app
│   ├── users/            # Custom User model + auth APIs
│   ├── posts/            # Post & like APIs
│   └── ...
│
├── frontend/             # React project
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── context/      # useContext (Auth state)
│   │   ├── pages/        # Profile, Home, Login, Register, Settings
│   │   └── App.js
│   └── ...
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/priyamjha/Django-React-Social-Media.git
cd Django-React-Social-Media
```

### 2️⃣ Backend Setup (Django)

```bash
cd backend
python -m venv env
source env/bin/activate   # For Linux/Mac
env\Scripts\activate      # For Windows

pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Backend will start at: `http://127.0.0.1:8000/`

### 3️⃣ Frontend Setup (React)

```bash
cd frontend
npm install
npm start
```

Frontend will start at: `http://localhost:3000/`

---

## 🔑 Environment Variables

Create a `.env` file inside the **backend** and add:

```env
SECRET_KEY=your_secret_key
DEBUG=True
ALLOWED_HOSTS=*
```

For **frontend**, create a `.env` file:

```env
REACT_APP_API_BASE_URL=http://127.0.0.1:8000
```

---

## 📌 Future Improvements

* Add **comments** on posts
* Add **notifications** (e.g., likes, follows)
* Implement **real-time chat** with WebSockets
* Deploy on **Docker + AWS/GCP/Heroku**

---

## 🤝 Contributing

Contributions are welcome! Fork the repo, create a new branch, and submit a PR.

---

## 📜 License

This project is licensed under the **MIT License**.

---

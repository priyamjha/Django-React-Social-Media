import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Layout from './Components/layout';

import UserProfile from './Routes/user_profile';
import Login from './Routes/login';
import Register from './Routes/register';

import { AuthProvider } from './contexts/useAuth';

import PrivateRoute from './Components/private_route';

import CreatePost from './Routes/create_post';

import Home from './Routes/home';

import Search from './Routes/search';

import Settings from './Routes/settings';

function App() {
  return (
    <ChakraProvider>

    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/:username" element={<Layout><PrivateRoute><UserProfile /></PrivateRoute></Layout>} />
          <Route path="/" element={<Layout><PrivateRoute><Home /></PrivateRoute></Layout>} />
          <Route path="/create/post" element={<Layout><PrivateRoute><CreatePost /></PrivateRoute></Layout>} />
          <Route path="/search" element={<Layout><PrivateRoute><Search /></PrivateRoute></Layout>} />
          <Route path="/settings" element={<Layout><PrivateRoute><Settings /></PrivateRoute></Layout>} />

          <Route path="/login" element={<Layout><Login /></Layout>} />
          <Route path="/register" element={<Layout><Register /></Layout>} />
        </Routes>
      </AuthProvider>
    </Router>

    </ChakraProvider>
  );
}

export default App;

import React from 'react';
import firebaase from "./lib/main";
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Review from './pages/Review';
import Quiz from './pages/Quiz';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from './pages/Login';
import Register from './pages/Register';

const auth = getAuth();

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setLoggedIn(user);
    } else {
      setLoggedIn(false);
    }
    setLoaded(true);
  });

  return (
    <Router>
      <div className="font-OpenSans bgSky">
        <Navbar loggedIn={loggedIn} />
        {loaded ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/review" element={<Review isLoggedIn={loggedIn} />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        ) : (
          <div className='flex justify-center items-center h-[80vh]'>Loading...</div>
        )}
      </div>
    </Router>
  );
}

export default App

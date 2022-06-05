import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route,
  Routes, Link
} from 'react-router-dom'

import About from './Layouts/About';
import Home from './Layouts/Home';
import Login from './Layouts/Login'

import './App.css';

function Redirect() {

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(()=>{
    const loginData = localStorage.getItem("loginData")
    if (!loginData) {
      navigate("/login")
    } else {
      navigate(location.pathname)
    }
  },[location.pathname])

  return (
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/about' exact element={<About/>} />
      <Route path='/login' exact element={<Login />} />
    </Routes>
  )
}

function App() {

  const [userData, setUserData] = useState({})

  

  return (
    <div className="App">
      <Router>
        <div>
          <h3>Username:{userData.username || "Belum Login"}</h3>
          <h3>Password:{userData.password || "Belum Login"}</h3>
        </div>
        <Redirect/>
      </Router>
    </div>
  );
}



export default App;

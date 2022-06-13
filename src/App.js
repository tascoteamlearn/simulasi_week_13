import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
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
import Week15 from './Layouts/Week15';

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

// const Redirector = ({children}) =>{
//   const accessToken = localStorage.getItem("access_token")
//   console.log("see here thousand times", accessToken)
//   if (!accessToken) {
//     return <Navigate to={"/login"} exact replace={true} />
//   } else {
//     return children
//   }
// }

function App() {

  const [userData, setUserData] = useState({})

  

  return (
    <div className="App">
      <Router>
        {/* <div>
          <h3>Username:{userData.username || "Belum Login"}</h3>
          <h3>Password:{userData.password || "Belum Login"}</h3>
        </div> */}
        <Routes>
          <Route path='/home' exact element={<Home/>} />
          <Route path='/about' exact element={<About/>} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/week15' exact element={<Week15 />} />
        </Routes>
        {/* <Redirector path='/' exact element={<Home/>} />
        <Redirector path='/about' exact element={<About/>} />
        <Redirector path='/login' exact element={<Login />} /> */}
        {/* <Redirect/> */}
      </Router>
    </div>
  );
}



export default App;

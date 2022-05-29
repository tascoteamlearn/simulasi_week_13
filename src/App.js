import {
  BrowserRouter as Router,
  Route,
  Routes, Link
} from 'react-router-dom'

import About from './Layouts/About';
import Home from './Layouts/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to={'/'}>Home</Link>
        </div>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/about' exact element={<About/>} />
        </Routes>
      </Router>
    </div>
  );
}



export default App;

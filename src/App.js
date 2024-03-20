
import './App.css';
import { About } from './components/About';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import Notestate from './context/notes/Notestate';
import  Alert  from './components/Alert';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { useState } from 'react';
function App() {
  const [alert, setalert] = useState(null);
  const ssalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };
  return (
    <>
    <Notestate>
      <BrowserRouter>
      <Navbar/>
      <Alert alert={alert} />
      <div className='container'>
      
      <Routes>
        <Route path="/" element={<Home ssalert={ssalert} />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login  ssalert={ssalert}/>} />
        <Route path="/signup" element={<Signup  ssalert={ssalert}/>} />
      </Routes>
      </div> 
    </BrowserRouter>
    </Notestate>
      
      
    </>
  );
}

export default App;

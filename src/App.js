
import './App.css';
import { About } from './components/About';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import Notestate from './context/notes/Notestate';
import { Alert } from './components/Alert';
import { Signup } from './components/Signup';
import { Login } from './components/Login';

function App() {
  return (
    <>
    <Notestate>
      <BrowserRouter>
      <Navbar/>
      <Alert message="this is amazing"/>
      <div className='container'>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </div> 
    </BrowserRouter>
    </Notestate>
      
      
    </>
  );
}

export default App;

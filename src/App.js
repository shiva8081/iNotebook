
import './App.css';
import { About } from './components/About';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import Notestate from './context/notes/Notestate';
import { Alert } from './components/Alert';

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
      </Routes>
      </div> 
    </BrowserRouter>
    </Notestate>
      
      
    </>
  );
}

export default App;


import './App.css';
import { About } from './components/About';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import Notestate from './context/notes/Notestate';

function App() {
  return (
    <>
    <Notestate>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </Notestate>
      
      
    </>
  );
}

export default App;

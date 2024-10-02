import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Media from './components/media/Media';
import Navbar from './components/navbar/Navbar';
import Gondaliers from './components/gondaliers/Gondaliers';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gondaliers" element={<Gondaliers />} />
        <Route path="resume" element={<Resume />} />
        <Route path="media" element={<Media />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'primereact/resources/themes/saga-blue/theme.css';  // Tema de PrimeReact
import 'primereact/resources/primereact.min.css';  // CSS de PrimeReact
import './App.css';

import Asideleft from './components/asideleft/asideleft';
import 'primeicons/primeicons.css';  // Iconos de PrimeReact
import Asideright from './components/asideright/asideright';
import Footer from './components/footer/footer';

import Home from './components/pages/home';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Navbar from './components/navbar/navbar'

function App() {
  return (
    <Router>
      <div className="grid-container">
        <Navbar />
        <Asideleft />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Asideright />
        <Footer />
      </div>
    </Router>
  );
}
export default App;

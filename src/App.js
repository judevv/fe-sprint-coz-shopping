import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer';
import Main from './pages/Main';


function App() {

  return (
    <BrowserRouter>
      <Header />
        <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
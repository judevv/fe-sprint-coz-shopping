import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import CardItem from './components/CardItem';
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
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import CardItem from './components/CardItem';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <CardItem />
    </BrowserRouter>
  );
}

export default App;
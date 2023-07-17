import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer';
import Main from './pages/Main';
import Products from './pages/Products';
import Bookmarks from './pages/Bookmarks';


function App() {
  const [ itemData, setItemData ] = useState([]);
  const [ bookmarkedItems, setBookmarkedItems ] = useState([]);
  const [ filteredType, setFilteredType ] = useState('');

    useEffect(() => {
        axios.get('http://cozshopping.codestates-seb.link/api/v1/products')
            .then(res => {
                const newData = res.data.map((data) => ({...data, isBookmarked: false}))
                return setItemData(newData)}
                )
            .catch(err => console.log(err))
    }, []);

    useEffect (() => {
        const bookmarkState = localStorage.getItem("bookmarkState");

        if (bookmarkState !== null) {
            const bookmarkedIds = JSON.parse(bookmarkState);
            const filteredItems = itemData.filter((item) => bookmarkedIds.includes(item.id));
            setBookmarkedItems(filteredItems);
        }
    }, [itemData])

    function resetFilter () {
      setFilteredType('');
    }

  return (
    <BrowserRouter>
      <Header resetFilter={resetFilter} />
      <Routes>
        <Route path='/'
               element={
                  <Main
                      itemData={itemData}
                      bookmarkedItems={bookmarkedItems}/>} />
        <Route path='/products/list'
               element={
                  <Products
                      itemData={itemData}
                      filteredType={filteredType}
                      setFilteredType={setFilteredType} />} />
        <Route path='/bookmark'
               element={
                  <Bookmarks
                      itemData={itemData}
                      bookmarkedItems={bookmarkedItems}
                      filteredType={filteredType}
                      setFilteredType={setFilteredType} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
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

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/'
               element={
                  <Main
                      itemData={itemData}
                      bookmarkedItems={bookmarkedItems}/>} />
        <Route path='/products/list'
               element={
                  <Products
                      itemData={itemData} />} />
        <Route path='/bookmark'
               element={
                  <Bookmarks
                      itemData={itemData}
                      bookmarkedItems={bookmarkedItems} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
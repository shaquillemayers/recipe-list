import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import Recipe from './pages/Recipe';

import './App.css';


function App() {

  return (
    <BrowserRouter>  
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/recipes' element={<Recipe />}></Route>
          <Route path='*' element={<Navigate to='/' />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>  
  );
}

export default App;

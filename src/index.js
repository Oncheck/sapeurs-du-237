import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleProduct from './components/SingleProduct';
import Home from './components/Home';
import Cart from './components/Cart';
import Contact from './components/Contact';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/home' element={<Home />}></Route>
        <Route exact path='/products' element={<App />}></Route>
        <Route exact path='/products/:name' element={<SingleProduct />}></Route>
        <Route exact path='/cart' element={<Cart />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
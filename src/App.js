import React from 'react';
import './App.css';
import {ProductListContainer} from './containers/ProductList'
import {CartContainer} from './containers/Cart'


function App() {
  return (
    <div className="App">
      <ProductListContainer/>
      <CartContainer/>
    </div>
  );
}

export default App;

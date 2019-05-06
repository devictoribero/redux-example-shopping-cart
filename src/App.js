import React from 'react';
import './App.css';
import {ProductListContainer} from './containers/ProductList'
import {CartContainer} from './containers/Cart'


function App() {
  return (
    <div className="App">
      <CartContainer/>
      <ProductListContainer/>
    </div>
  );
}

export default App;

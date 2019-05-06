import React from 'react'
import {ProductList} from '../components/ProductList'
import {connect} from 'react-redux'
import {addToCart} from '../actions'

function Component({products, onAddProduct}) {
  if (!products) return null;

  return <ProductList
    products={products}
    onAddProduct={onAddProduct}
    />
}

const mapStateToProps = state => ({
  products: state.products
})
const mapDispatchToProps = dispatch => ({
  onAddProduct: product => dispatch(addToCart(product))
})
const ProductListContainer = connect(mapStateToProps, mapDispatchToProps)(Component);
export {ProductListContainer}
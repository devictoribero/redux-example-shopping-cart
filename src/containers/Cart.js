import React from 'react'
import {Cart, EmptyCart} from '../components/Cart'
import {connect} from 'react-redux'
import {addToCart} from '../actions'

function Component({products = [], onAddProduct}) {
  if (!products || products.length === 0)
    return <EmptyCart/>

  return <Cart products={products} onAddProduct={onAddProduct}/>
}
const mapStateToProps = state => ({
  products: state.cart
})
const mapDispatchToProps = dispatch => ({
  onAddProduct: product => dispatch(addToCart(product))
})
const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Component);
export {CartContainer}
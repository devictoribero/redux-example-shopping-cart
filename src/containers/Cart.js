import React from 'react'
import {Cart, EmptyCart} from '../components/Cart'
import {connect} from 'react-redux'
import {addToCart, removeFromCart, emptyCart} from '../actions'

function Component({
  products = [],
  onAddProduct,
  onRemoveProduct,
  onEmptyCart
}) {
  if (!products || products.length === 0)
    return <EmptyCart/>

  return (
    <Cart
      products={products}
      onAddProduct={onAddProduct}
      onRemoveProduct={onRemoveProduct}
      onEmptyCart={onEmptyCart}/>
  )
}

const mapStateToProps = state => ({
  products: state.cart
})
const mapDispatchToProps = dispatch => ({
  onAddProduct: product => dispatch(addToCart(product)),
  onRemoveProduct: product => dispatch(removeFromCart(product)),
  onEmptyCart: () => dispatch(emptyCart())
})
const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Component);
export {CartContainer}
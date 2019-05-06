import React from 'react'
import {Cart, EmptyCart} from '../components/Cart'
import {connect} from 'react-redux'

function Component({products = []}) {
  if (!products || products.length === 0)
    return <EmptyCart/>

  return <Cart products={products}/>
}
const mapStateToProps = state => ({
  products: state.cart
})
const CartContainer = connect(mapStateToProps, null)(Component);
export {CartContainer}
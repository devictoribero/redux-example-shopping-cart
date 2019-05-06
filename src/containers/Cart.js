import React from 'react'
import {Cart} from '../components/Cart'
import {connect} from 'react-redux'

function Component({products = []}) {
  if (!products || products.length === 0)
    return (
      <h1 style={{color:'orange', margin: 0}}>
        You haven't selected any items, what are you waiting for?
      </h1>
    )

  return <Cart products={products}/>
}
const mapStateToProps = state => ({
  products: state.cart
})
const CartContainer = connect(mapStateToProps, null)(Component);
export {CartContainer}
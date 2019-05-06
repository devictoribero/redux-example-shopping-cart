import React from 'react'

export function EmptyCart() {
  return(
    <div style={cartStyles}>
      <h1 style={{color:'orange', margin: 0}}>
        You haven't selected any items yet.<br/>What are you waiting for?
      </h1>
    </div>
  )
}
export function Cart({products}) {
  return(
    <ul style={cartStyles}>
      <span style={tableStyles}>
        <span style={cellStyles}>Product</span>
        <span style={cellStyles}>Quantity</span>
        <span style={cellStyles}>Price (€)</span>
      </span>
      {products.map(product => (
        <li style={tableStyles} key={product.id}>
          <span style={productStyles}>{product.name}</span>
          <span style={cellStyles}>1</span>
          <span style={cellStyles}>{product.price}€</span>
        </li>
      ))}
    </ul>
  )
}

const cartStyles = {
  padding: 30,
  margin: 0,
  background: 'white'
}

const tableStyles = {
  display: 'flex',
}
const cellStyles = {
  flex: 1,
  padding: '5px 0',
}
const productStyles = {
  ...cellStyles,
  fontWeight: 'bold'
}
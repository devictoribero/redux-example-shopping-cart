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
export function Cart({products, onAddProduct}) {
  return(
    <ul style={cartStyles}>
      <span style={tableStyles}>
        <CartCell>Product</CartCell>
        <CartCell>Quantity</CartCell>
        <CartCell>Price (€)</CartCell>
        <CartCell>Actions</CartCell>
      </span>
      {products.map(product => (
        <li style={tableStyles} key={product.id}>
          <CartCell style={{fontWeight: 'bold'}}>
            {product.name}
          </CartCell>
          <CartCell style={cellStyles}>
            <span style={{margin: '0 10px'}}>{product.quantity}</span>
            <button onClick={() => onAddProduct(product)}>+</button>
          </CartCell>
          <CartCell style={cellStyles}>{product.quantity * product.price}€</CartCell>
          <CartCell style={cellStyles}>
            <button>remove</button>
          </CartCell>
        </li>
      ))}
    </ul>
  )
}
function CartCell({style, children}) {
  return <span style={{...cellStyles, ...style}}>{children}</span>
}

const cartStyles = {
  padding: 30,
  margin: 0,
  background: 'white',
}

const tableStyles = {
  display: 'flex',
}
const cellStyles = {
  flex: 2,
  padding: '5px 0',
}
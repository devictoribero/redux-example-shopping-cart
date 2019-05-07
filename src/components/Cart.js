import React from 'react'

function LayoutCart({children}) {
  return <section style={cartWrapperStyles}>{children}</section>
}
export function EmptyCart() {
  return(
    <LayoutCart>
      <p style={{fontSize: '16px', margin: 0, lineHeight: 1.5}}>
        You haven't selected any items yet.<br/>
        <span style={{fontWeight: 'bold'}}>What are you waiting for?</span>
      </p>
    </LayoutCart>
  )
}
export function Cart({products, onAddProduct, onRemoveProduct, onEmptyCart}) {
  return(
    <LayoutCart>
      
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
            <button onClick={() => onRemoveProduct(product)}>-</button>
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
      <ButtonEmptyCart onClick={onEmptyCart}/>
    </LayoutCart>
  )
}
function CartCell({style, children}) {
  return <span style={{...cellStyles, ...style}}>{children}</span>
}
function ButtonEmptyCart({onClick}) {
  return (
    <button onClick={onClick} style={emptyCartButtonStyles}>
      Vaciar Carrito
    </button>
  )
}

const cartWrapperStyles = {
  padding: '15px',
  margin: 0,
  background: 'white',
  borderRadius: 5
}
const cartStyles = {
  padding: 0,
  margin: 0,
  background: 'white',
}

const tableStyles = {
  display: 'flex',
}
const cellStyles = {
  flex: 2,
  padding: '5px 0',
  fontSize: '14px'
}
const emptyCartButtonStyles = {
  background: 'transparent',
  color: 'red',
  border: 'none',
  margin: 0,
  padding: '10px 0',
  cursor: 'pointer',
}
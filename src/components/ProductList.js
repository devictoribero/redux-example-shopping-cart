import React from 'react'

export function ProductList({products, onAddProduct}) {
  return (
    <ul style={productListStyles}>
      {products.map(product => {
        return(
          <li key={product.id} style={productStyles}>
            <h1 style={nameStyles}>{product.name}</h1>
            <span style={priceStyle}>{product.price}€</span>
            <button onClick={() => onAddProduct(product)} style={buttonStyles}>
              Añadir
            </button>
          </li>
        )
      })}
    </ul>
  )
}

const productListStyles = {
  display: 'flex',
  margin: 0,
  padding: 0
}
const productStyles= {
  listStyle: 'none',
  margin: '10px',
  padding: '10px',
  boxSizing: 'border-box',
  background: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
}
const nameStyles = {
  fontSize: '20px',
  margin: 0
}
const priceStyle = {
  margin: '5px 0 20px 0'
}
const buttonStyles = {
  background: 'rgb(117, 206, 84)',
  color: 'rgb(37, 86, 19)',
  border: 'none',
  borderRadius: '5px',
  padding: '10px',
  fontWeight: 'bold',
  cursor: 'pointer',
  
}
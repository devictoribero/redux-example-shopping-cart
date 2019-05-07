import React from 'react'

export function ProductList({products, onAddProduct}) {
  return (
    <ul style={productListStyles}>
      {products.map(product => {
        return(
          <li key={product.id} style={productStyles}>
            <span style={nameStyles}>{product.name}</span>
            <span>{product.price}€</span>
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
  justifyContent: 'space-between',
  alignItems: 'baseline',
  borderRadius: '5px',
}
const nameStyles = {
  fontSize: '18px',
  fontWeight: 'bold',
  margin: 0
}
const buttonStyles = {
  background: 'rgb(117, 206, 84)',
  color: 'rgb(37, 86, 19)',
  border: 'none',
  borderRadius: '5px',
  padding: '5px 10px',
  fontWeight: 'bold',
  cursor: 'pointer',
  display: 'block',
}
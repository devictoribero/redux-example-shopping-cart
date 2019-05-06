import React from 'react'

export function Cart({products}) {
  return(
    <ul>
      {products.map(product => <li key={product.id}>{product.name}</li>)}
    </ul>
  )

}
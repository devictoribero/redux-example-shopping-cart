import {ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART} from '../types'

function areEqual(first, second) {
  return first === second
}

function getProductById(products, id) {
  return products.filter(product => areEqual(product.id, id))
}

export function cart(state = [], action) {
  switch(action.type) {
    case ADD_TO_CART:
      let newState = [...state];
      const cartHasProduct = getProductById(state, action.payload.product.id).length > 0

      if (!cartHasProduct) {
        newState.push({
          ...action.payload.product,
          quantity: 1
        })
        return newState
      }
        
      return newState.map(prod => {
        let tmpProd = prod;
        if (prod.id === action.payload.product.id) {
          tmpProd.quantity++;
        }
        return tmpProd;
      })

    case REMOVE_FROM_CART:
      return state.filter(product => product.id !== action.payload.productId)

    case EMPTY_CART:
      return []

    default:
      return state
  }
}
import {ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART} from '../types'

function areEqual(first, second) {
  return first === second
}

function getProductById(products, id) {
  return products.filter(product => areEqual(product.id, id))
}

export function cart(state = [], action) {
  let newState = [...state]

  switch(action.type) {
    case ADD_TO_CART:      
      const cartHasProduct = getProductById(state, action.payload.product.id).length > 0
      const {quantity: quantityToAdd = 1} = action.payload

      if (!cartHasProduct) {
        newState.push({
          ...action.payload.product,
          quantity: quantityToAdd
        })
        return newState
      }
        
      return newState.map(cartProd => {
        if (areEqual(cartProd.id, action.payload.product.id)) {
          let tmpProd = cartProd;
          tmpProd.quantity += quantityToAdd;
          return tmpProd
        }

        return cartProd;
      })

    case REMOVE_FROM_CART:
      const {quantity: quantityToSubs = 1} = action.payload

      return newState.map(cartProd => {
        if (!areEqual(cartProd.id, action.payload.product.id)) {
          return cartProd
        }
          
        if (cartProd.quantity !== quantityToSubs) {
          let tmpProd = cartProd;
          tmpProd.quantity -= quantityToSubs;
          tmpProd.quantity = tmpProd.quantity < 0 ? 0 : tmpProd.quantity
          
          if (tmpProd.quantity > 0)
            return tmpProd;
        }
      }).filter(el => el !== undefined)

    case EMPTY_CART:
      return []

    default:
      return state
  }
}
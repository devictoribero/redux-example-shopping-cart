import {ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART} from '../types'

export function cart(state = [], action) {
  switch(action.type) {
    case ADD_TO_CART:
      let newState = [...state]
      newState.push(action.payload.product)
      return newState

    case REMOVE_FROM_CART:
      return state.filter(product => product.id !== action.payload.productId)

    case EMPTY_CART:
      return []

    default:
      return state
  }
}
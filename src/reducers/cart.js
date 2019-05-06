import {ADD_TO_CART, EMPTY_CART} from '../types'

export function cart(state = [], action) {
  switch(action.type) {
    case ADD_TO_CART:
      let newState = [...state]
      newState.push(action.payload.product)
      return newState

    case EMPTY_CART:
      return []

    default:
      return state
  }
}
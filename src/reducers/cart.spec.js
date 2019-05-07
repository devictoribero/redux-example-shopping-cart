import { cart } from "./cart";

describe('reducers', () => {
  describe('cart', () => {
    it('Receives an initial State', () => {
      const initialState = []
      expect(cart(undefined, {})).toEqual(initialState)
    })

    it('Should handle add an item to the cart when we don\'t have that product', () => {
      const product = {id: 0,name: 'whatever'}
      const initialState = []
      const stateAfterDispatch = cart(initialState, {type: 'ADD_TO_CART', payload: {product}})
      expect(stateAfterDispatch).toEqual([{...product, quantity: 1}])
    })

    it('Should handle add an item to the cart when we already have that product', () => {
      const product = {id: 0,name: 'whatever'}
      const firstElementInitialState = {...product, quantity: 1}
      const initialState = [firstElementInitialState]
      const stateAfterDispatch = cart(initialState, {type: 'ADD_TO_CART', payload: {product}})
      expect(stateAfterDispatch).toEqual([{...product, quantity: 2}])
    })

    it('Should handle add an item to the cart when we want to add more than 1 item of the same product', () => {
      const product = {id: 0,name: 'whatever'}
      const firstElementInitialState = {...product, quantity: 1}
      const initialState = [firstElementInitialState]
      const stateAfterDispatch = cart(initialState, {type: 'ADD_TO_CART', payload: {product, quantity: 2}})
      expect(stateAfterDispatch).toEqual([{...product, quantity: 3}])
    })

    it('Should handle remove a product from the cart when we already have the product with quantity:2', () => {
      const product = {id: 0,name: 'whatever'}
      const firstElementInitialState = {...product, quantity: 2}
      const initialState = [firstElementInitialState]
      const stateAfterDispatch = cart(initialState, {type: 'REMOVE_FROM_CART', payload: {product}})
      expect(stateAfterDispatch).toEqual([{...product, quantity: 1}])
    })

    it('Should handle remove a product from the cart when we have the product with quantity:1 ', () => {
      const product = {id: 0,name: 'whatever'}
      const firstElementInitialState = {...product, quantity: 1}
      const initialState = [firstElementInitialState]
      const stateAfterDispatch = cart(initialState, {type: 'REMOVE_FROM_CART', payload: {product}})
      expect(stateAfterDispatch).toEqual([])
    })

    it('Should handle remove a product from the cart when we want to remove more than 1 item of the same product ', () => {
      const product = {id: 0,name: 'whatever'}
      const firstElementInitialState = {...product, quantity: 2}
      const initialState = [firstElementInitialState]
      const stateAfterDispatch = cart(initialState, {type: 'REMOVE_FROM_CART', payload: {product, quantity: 2}})
      expect(stateAfterDispatch).toEqual([])
    })

    it('Should handle remove a product from the cart when we want to remove more items that we have ', () => {
      const product = {id: 0,name: 'whatever'}
      const firstElementInitialState = {...product, quantity: 1}
      const initialState = [firstElementInitialState]
      const stateAfterDispatch = cart(initialState, {type: 'REMOVE_FROM_CART', payload: {product, quantity: 2}})
      expect(stateAfterDispatch).toEqual([])
    })

    it('Should handle empty the cart', () => {
      const product = {id: 0,name: 'whatever'}
      const stateAfterDispatch = cart([product,product], {type: 'EMPTY_CART'})
      expect(stateAfterDispatch).toEqual([])
    })
  })
})
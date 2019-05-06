import { cart } from "./cart";

describe('reducers', () => {
  describe('cart', () => {
    it('Receives an initial State', () => {
      const initialState = []
      expect(cart(undefined, {})).toEqual(initialState)
    })

    it('Should handle add an item to the cart', () => {
      const product = {
        id: 0,
        name: 'whatever'
      }
      const stateAfterDispatch = cart(undefined, {type: 'ADD_TO_CART', payload: {product}})
      expect(stateAfterDispatch).toEqual([product])
    })

    it('Should handle remove a product from the cart', () => {
      const product = {id: 0,name: 'whatever'}
      const anotherProduct = {id: 2,name: 'whatever'}
      const stateAfterDispatch = cart([product,anotherProduct], {type: 'REMOVE_FROM_CART', payload: {productId: anotherProduct.id}})
      expect(stateAfterDispatch).toEqual([product])
    })

    it('Should handle empty the cart', () => {
      const product = {
        id: 0,
        name: 'whatever'
      }
      const stateAfterDispatch = cart([product,product], {type: 'EMPTY_CART'})
      expect(stateAfterDispatch).toEqual([])
    })
  })
})
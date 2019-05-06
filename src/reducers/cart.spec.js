import { cart } from "./cart";

describe('reducers', () => {
  describe('cart', () => {
    it('Receives an initial State', () => {
      const initialState = []
      expect(cart(undefined, {})).toEqual(initialState)
    })

    it('should handle add an item to the cart', () => {
      const product = {
        id: 0,
        name: 'whatever'
      }
      const stateAfterDispatch = cart(undefined, {type: 'ADD_TO_CART', payload: { product}})
      expect(stateAfterDispatch).toEqual([product])
    })

    it('should handle add an item to the cart', () => {
      const product = {
        id: 0,
        name: 'whatever'
      }
      const stateAfterDispatch = cart([product,product], {type: 'EMPTY_CART'})
      expect(stateAfterDispatch).toEqual([])
    })
  })
})
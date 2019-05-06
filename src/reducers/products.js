const initialState = [
  {
    id: '0',
    type: 'TSHIRT',
    name: 'Camiseta basica',
    price: 5,
  },
  {
    id: '1',
    type: 'GLOVES',
    name: 'Guantes de portero',
    price: 12
  },
  {
    id: '2',
    type: 'GLOVES',
    name: 'Guantes de jardinero',
    price: 12
  },
]

export function products(state = initialState, action) {
  switch(action.type) {
    default:
      return state
  }
}
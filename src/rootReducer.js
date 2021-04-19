function rootReducer(state, action) {
  switch (action.type) {
    case 'addCart':
      console.log("state_add", state.product)
      console.log("action", action)
      const initialCartCopy = { ...state.cart, [action.cartItem.name]: action.cartItem };
      console.log("bat", initialCartCopy)
      return {
        ...state,
        cart: initialCartCopy
      }

    case 'removeCart':
      console.log("state_remove", state);
      const currCartCopy = { ...state.cart };
      delete currCartCopy[action.cartItem.name]
      console.log("cat", currCartCopy)
      return {
        ...state,
        cart: currCartCopy
      }
    default:
      throw new Error(`Unexpected action type: ${action.type}`)
  }
}

export default rootReducer;
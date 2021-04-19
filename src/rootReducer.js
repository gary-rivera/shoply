function rootReducer(state, action) {
  switch(action.type){
    case 'addCart':
      return 'hi';
    case 'removeCart':
      return 'hello'
    default:
      throw new Error(`Unexpected action type: ${action.type}`)
  }
}

//addCart -> 
/**
 * return { 
 *  ...state, item obj?
 * }
 */

export default rootReducer;
import react, { useContext } from 'react';
import DispatchContext from './dispatchContext';
import ShoppingCartContext from './ShoppingCartContext';

function ShoppingCart() {
  const dispatch = useContext(DispatchContext);
  const state = useContext(ShoppingCartContext);

  


  return (
    <div> ShoppingCart </div>
  )
}

export default ShoppingCart;
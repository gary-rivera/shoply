import './App.css';
import ItemList from './ItemList';
import itemData from './data.json';
import { useReducer } from 'react';
import rootReducer from './rootReducer';
import DispatchContext from "./dispatchContext";
import ShoppingCartContext from './shoppingCartContext';

const INITIAL_STATE = {
  product: itemData.products,
  cart: {}
};

function App() {
  console.log("app rendered")
  const [state, dispatch] = useReducer(rootReducer, INITIAL_STATE)

  return (
    <div className="App">
      <DispatchContext.Provider value={dispatch}>
        <ShoppingCartContext.Provider value={state.items}>
          <ItemList value={dispatch}items={state.product}/>
        </ShoppingCartContext.Provider>
      </DispatchContext.Provider>
    </div>
  );
}

export default App;

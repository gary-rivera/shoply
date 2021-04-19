import './App.css';
import ItemList from './ItemList';
import itemData from './data.json';
import { useReducer } from 'react';
import rootReducer from './rootReducer';
import DispatchContext from "./dispatchContext";
import ShoppingCartContext from './shoppingCartContext';

function App() {
  console.log("app rendered")
  const { products } = itemData
  const [state, dispatch] = useReducer(rootReducer, {products})

  return (
    <div className="App">
      <DispatchContext.Provider value={dispatch}>
        <ShoppingCartContext.Provider value={state.items}>
          <ItemList value={dispatch}items={products}/>
        </ShoppingCartContext.Provider>
      </DispatchContext.Provider>
    </div>
  );
}

export default App;

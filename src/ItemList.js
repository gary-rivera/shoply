import { useContext } from 'react';
import Item from './Item';
import {v4 as uuid} from 'uuid';
import ShoppingCartContext from './shoppingCartContext'

function ItemList({items, dispatch}) {
  console.log("Itemlist rendered")
  const itemsInContext = useContext(ShoppingCartContext)
  return (
    <div>
      <ul> 
        {Object.values(items).map(item => (
          <li>
          <Item 
            key={uuid()}
            name={item.name}
            imgUrl={item.image_url}
            description={item.description}
            price={items.price}
          />
          <button onClick={evt => dispatch({type: 'addCart'})}> Add to Cart</button>
        <button onClick={evt => dispatch({type: 'removeCart'})}> Remove from Cart</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemList;
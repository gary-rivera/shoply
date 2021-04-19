import { useContext } from 'react';
import Item from './Item';
import { v4 as uuid } from 'uuid';
import ShoppingCartContext from './shoppingCartContext';
import DispatchContext from './dispatchContext';

function ItemList({ items }) {
  console.log("Itemlist rendered");
  const itemsToPutInCart = useContext(ShoppingCartContext);
  const dispatch = useContext(DispatchContext);

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
            <button onClick={evt => dispatch({ type: 'addCart', cartItem: item })}> Add to Cart</button>
            <button onClick={evt => dispatch({ type: 'removeCart', cartItem: item })}> Remove from Cart</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemList;
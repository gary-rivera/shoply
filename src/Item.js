import './Item.css';

function Item({name, imgUrl, description, price}) {
  console.log(`Item ${name} rendered`);
  return (
    <div>
      <h3> {name} </h3>
      <img className="itemImg" src={imgUrl} alt={name}/>
      <p>{description}</p>
      <h5>{price}</h5>
    </div>
  )
}

export default Item;
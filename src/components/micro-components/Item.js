import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/Item.css';

const Item = (props) => {
  return (
    <>
      <div className="Item__">
        <Link to={`/shop/product/${props.id}`}>
          <div className="image">
            <img src={props.imageSrc} alt={props.name} width="400px" />
          </div>
          <div className="description">
            <h2>{props.name}</h2>
            <p>{props.price}</p>
            <p>{props.description}</p>
          </div>
        </Link>
      </div>
    </>
  );
};
 
export default Item;
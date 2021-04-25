import React from 'react';
import { Link } from 'react-router-dom';
import '../../stylesheets/ProductDetails.css';

const ProductDetails = (props) => {
  return (
    <div className="ProductDetails__">
      <div className="wrapper">
        <Link to="/shop" className="back">Back</Link>
        <div className="flex-container">
          <div className="image flex-item">
            <img src={props.item.imageSrc} alt={props.item.name} />
          </div>
          <div className="description flex-item">
            <h2>{props.item.name}</h2>
            <p>{props.item.price}</p>
            <p>{props.item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default ProductDetails;
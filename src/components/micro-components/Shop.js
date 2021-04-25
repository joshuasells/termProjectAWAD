import React from 'react';
import Item from './Item';
import '../../stylesheets/Shop.css';

const Shop = (props) => {
  return (
    <div className="Shop__">
      <div className="wrapper">
        {
          props.items.map((item) => {
            return (
              <Item
                id={item.id}
                key={item.id}
                imageSrc={item.imageSrc}
                altText={item.altText}
                name={item.name}
                price={item.price}
                description={item.description}
              />
            );
          })
        }
      </div>
    </div>
  );
}
 
export default Shop;
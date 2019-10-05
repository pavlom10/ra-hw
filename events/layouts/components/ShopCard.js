import React from 'react';
import PropTypes from 'prop-types';

export default function ShopCard(props) {

    const {item} = props;

    return (
        <div className="shop-card">
            <img src={item.img} />
            <span className="shop-card-name">{item.name}</span>
            <span className="shop-card-price">{item.price}</span>
            <span className="shop-card-color">{item.color}</span>
        </div>
    );

}


ShopCard.propTypes = {
    item: PropTypes.shape({
        img: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.string,
        color: PropTypes.string
    })
}
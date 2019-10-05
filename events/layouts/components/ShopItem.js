import React from 'react';
import PropTypes from 'prop-types';

export default function ShopItem(props) {

    const {item} = props;

    return (
        <div className="shop-item">
            <img src={item.img} />
            <span className="shop-item-name">{item.name}</span>
            <span className="shop-item-price">{item.price}</span>
            <span className="shop-item-color">{item.color}</span>
        </div>
    );

}

ShopItem.propTypes = {
    item: PropTypes.shape({
        img: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.string,
        color: PropTypes.string
    })
}
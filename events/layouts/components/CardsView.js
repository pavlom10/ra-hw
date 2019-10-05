import React from 'react';
import PropTypes from 'prop-types';

import ShopCard from './ShopCard';

export default function CardsView(props) {

    const {cards} = props;

    return (
        <>
            {cards.map((p, i) => <ShopCard item={p} key={i} />)}
        </>
    );

}

CardsView.propTypes = {
    cards: PropTypes.array.isRequired
}
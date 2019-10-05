import React from 'react';
import PropTypes from 'prop-types';

import ShopItem from './ShopItem';

export default function ListView(props) {

    const {items} = props;

    return (
        <>
            {items.map((p, i) => <ShopItem item={p} key={i} />)}
        </>
    );

}

ListView.propTypes = {
    items: PropTypes.array.isRequired
}
import React from 'react';
import PropTypes from 'prop-types';

export default class Listing extends React.Component {

    static propTypes = {
        items: PropTypes.array
    }    

    getPrice = (price, currency_code) => {

        switch (currency_code) {
            case 'USD': return '$' + price;
            case 'EUR': return '€' + price;
            default: return `${price} ${currency_code}`;
        }

    }

    getQuontityClass = (quontity) => {

        let qClass = "item-quantity level-";

        if (quontity <= 10) {
            return qClass + 'low';
        } else if (quontity <= 20) {
            return qClass + 'medium';
        } else {
            return qClass + 'high';
        }

    }

    makeTitle = (title) => {

        if (title && title.length > 50) {
            return title.slice(0, 50) + '...';
        } else {
            return title;
        }

    }

    render() {
    
        const {items} = this.props;

        return (
            <div className="item-list">

                {items.map((p) => 
                        
                        <div className="item" key={p.listing_id}>
                            <div className="item-image">
                            <a href={p.url}>
                                {p.MainImage && <img src={p.MainImage.url_570xN} /> }
                            </a>
                            </div>
                            <div className="item-details">
                            <p className="item-title">{this.makeTitle(p.title)}</p>
                            <p className="item-price">{this.getPrice(p.price, p.currency_code)}</p>
                            <p className={this.getQuontityClass(p.quantity)}>{p.quantity} left</p>
                            </div>
                        </div>

                )}
            </div>
        )
    }

}

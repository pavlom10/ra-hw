import React from 'react';
import PropTypes from 'prop-types';

import IconSwitch from './IconSwitch'
import ListView from './ListView'
import CardsView from './CardsView'

export default class Store extends React.Component {

    static propTypes = {
        products: PropTypes.array.isRequired
    }

    state = {
        icon: "view_list"
    }

    onSwitch = (icon) => {

        this.setState(prevState => ({ 
            icon: prevState.icon === "view_list" ? "view_module" : "view_list"
        }));

    }

    render() {

        const {products} = this.props;

        return (
            <>
                <IconSwitch 
                    icon={this.state.icon} 
                    onSwitch={(icon) => this.onSwitch(icon)} 
                />

                {this.state.icon === "view_list" ? 
                    <ListView items={products} /> : <CardsView cards={products} />
                }

            </>
        )
    }

}

import React from 'react';

import WatchesForm from './WatchesForm';
import WatchesClock from './WatchesClock';

export default class Watches extends React.Component {

    state = {
        watches: []
    }

    handleAdd = watches => {
        this.setState({
            watches: [...this.state.watches, watches]
        });
    }

    handleDelete = id => {
        this.setState({
            watches: this.state.watches.filter(item => item.id !== id)
        }) 
    }

    render() {

        const {watches} = this.state;

        return (
            <>
                <WatchesForm onAdd={this.handleAdd} />
                {watches.map(item => (<WatchesClock key={item.id} onDelete={this.handleDelete} {...item} />))}
            </>
        )


    }


}
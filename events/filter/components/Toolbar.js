import React from 'react';
import PropTypes from 'prop-types';

export default function Toolbar(props) {
    
    const {filters, selected, onSelectFilter} = props;

    return (
        <>
            {filters.map(o => 
                <button className={o === selected ? "selected" : "unselected"} onClick={e => onSelectFilter(o)} key={o}>{o}</button>
            )}
        </>
    );
}

Toolbar.propTypes = {
    filters: PropTypes.array.isRequired,
    selected: PropTypes.string,    
    onSelectFilter: PropTypes.func.isRequired
}
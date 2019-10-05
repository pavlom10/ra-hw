import React from 'react';
import PropTypes from 'prop-types';

export default function IconSwitch(props) {
    
    const {icon, onSwitch} = props;

    return (
        <button onClick={() => onSwitch(icon)}><i className="material-icons">{icon}</i></button>
    )

}

IconSwitch.propTypes = {
    icon: PropTypes.string.isRequired,
    onSwitch: PropTypes.func.isRequired
}
import React from 'react';
import PropTypes from 'prop-types';
import StepsModel from './StepsModel';

export default function StepsList(props) {
    
    const {steps, onDelete} = props;
    
    const del = '✗';

    return (
        <ul>{steps.map(item =>
                <li key={item.id}>{item.date} {item.km} <button onClick={() => onDelete(item.id)}>{del}</button></li>)
            }
        </ul>            
    )
}

StepsList.propTypes = {
    steps: PropTypes.instanceOf(StepsModel),
    onDelete: PropTypes.func.isRequired
}
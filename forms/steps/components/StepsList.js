import React from 'react';
import PropTypes from 'prop-types';
import StepsModel from './StepsModel';

export default function StepsList(props) {
    
    const {steps, onDelete} = props;
    
    const del = '✗';

    // sort
    const compare = (a, b) => {
        if (a.date < b.date ) {
            return -1;
        }
        if (a.date > b.date) {
            return 1;
        }

        return 0;
      }

    let sortedSteps = steps.sort(compare);            

    return (
        <ul>{sortedSteps.map(item =>
                <li key={item.id}>{item.date} {item.km} <button onClick={() => onDelete(item.id)}>{del}</button></li>)
            }
        </ul>            
    )
}

StepsList.propTypes = {
    steps: PropTypes.instanceOf(StepsModel),
    onDelete: PropTypes.func.isRequired
}
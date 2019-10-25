import React, {useState} from 'react';

import StepsFilter from './StepsFilter';
import StepsList from './StepsList';
import StepsModel from './StepsModel';


export default function Steps(props) {

    const [steps, setSteps] = useState([]);

    const handleAdd = form => {

        setSteps(prevSteps => {

            let updated = false;

            let newList = prevSteps.map(item => {

                if (item.date === form.date) {
                    updated = true;
                    return new StepsModel(item.id, item.date, Number(item.km) + Number(form.km));
                } else {
                    return item;
                }

            });            

            if (!updated) {
                newList = [...prevSteps, form];
            }

            return newList;

        });

        
    }

    const handleDelete = id => {
        setSteps(steps.filter(item => item.id !== id));
    }    

    
    return (
        <>
            <StepsFilter onAdd={handleAdd} />
            <StepsList steps={steps} onDelete={handleDelete}  />
        </>
    )
}
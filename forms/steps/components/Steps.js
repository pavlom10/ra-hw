import React, {useState} from 'react';

import StepsFilter from './StepsFilter';
import StepsList from './StepsList';
import StepsModel from './StepsModel';


export default function Steps(props) {

    const [steps, setSteps] = useState([]);

    const handleAdd = form => {

        setSteps(prevSteps => {

            let updated = false;

            prevSteps = prevSteps.map(item => {

                if (item.date === form.date) {
                    updated = true;
                    return new StepsModel(item.id, item.date, Number(item.km) + Number(form.km));
                } else {
                    return item;
                }

            });            

            const compare = (a, b) => {
                if (a.date < b.date ) {
                    return -1;
                }
                if (a.date > b.date) {
                    return 1;
                }
                return 0;
              }

            if (!updated) {
                prevSteps = [...prevSteps, form];
            }

            return prevSteps.sort(compare);            

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
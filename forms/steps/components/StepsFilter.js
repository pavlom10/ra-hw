import React, {useState} from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';

import StepsModel from './StepsModel';

export default function StepsFilter(props) {

    const {onAdd} = props;
    
    const [form, setForm] = useState({
        date: '',
        km: ''
    });
    
    const handleChange = evt => {
        const {name, value} = evt.target;
        setForm(prevForm => ({...prevForm, [name]: value}));
    }
    
    const handleSubmit = evt => {
        evt.preventDefault();
        const steps = new StepsModel(nanoid(), form.date, form.km);
        onAdd(steps);
        setForm({date: '', km: ''});
    }    

    return (
        <form onSubmit={handleSubmit}>
            <label>Дата ДД.ММ.ГГГГ</label>
            <input type="text" name="date" value={form.date} onChange={handleChange} />

            <label>Пройдено км</label>
            <input type="text" name="km" value={form.km} onChange={handleChange} />
            
            <input type="submit" value="Ок" />
        </form>
    )
}

StepsFilter.propTypes = {
    onAdd: PropTypes.func.isRequired
}
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';

import WatchesModel from './WatchesModel';

export default function WatchesForm(props) {

    const {onAdd} = props;
    
    const [form, setForm] = useState({
        name: '',
        timeZone: ''
    });
    
    const handleChange = evt => {
        const {name, value} = evt.target;
        setForm(prevForm => ({...prevForm, [name]: value}));
    }
    
    const handleSubmit = evt => {
        evt.preventDefault();
        const watches = new WatchesModel(nanoid(), form.name, form.timeZone);
        onAdd(watches);
        setForm({name: '', timeZone: ''});
    }    

    return (
        <form onSubmit={handleSubmit}>
            <label>Название</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} />

            <label>Временная зона</label>
            <input type="text" name="timeZone" value={form.timeZone} onChange={handleChange} placeholder="-3" />
            
            <input type="submit" value="Добавить" />
        </form>
    )
}

WatchesForm.propTypes = {
    onAdd: PropTypes.func.isRequired
}
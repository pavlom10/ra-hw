import React, {useState} from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';

import CrudModel from './CrudModel';

export default function CrudForm(props) {

    const {onAdd} = props;
    
    const [form, setForm] = useState({
        content: '',
    });
    
    const handleChange = evt => {
        const {name, value} = evt.target;
        setForm(prevForm => ({...prevForm, [name]: value}));
    }
    
    const handleSubmit = evt => {
        evt.preventDefault();
        const note = new CrudModel(nanoid(), form.content);
        onAdd(note);
        setForm({content: ''});
    }    

    return (
        <form onSubmit={handleSubmit}>
            <label>New note</label>
            <textarea name="content" rows="5" onChange={handleChange} value={form.content} />
            <input type="submit" value="Send" />
        </form>
    )
}

CrudForm.propTypes = {
    onAdd: PropTypes.func.isRequired
}
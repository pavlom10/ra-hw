import React from 'react';
import PropTypes from 'prop-types';
import CrudModel from './CrudModel';

export default function CrudNotes(props) {
    
    const {notes, onDelete} = props;
    
    const del = '✗';

    return (
        <div className="notesList">
            {notes.map(item =>
                <div key={item.id}>{item.content} <button onClick={() => onDelete(item.id)}>{del}</button></div>)
            }
        </div>
    )
}

CrudNotes.propTypes = {
    notes: PropTypes.instanceOf(CrudModel),
    onDelete: PropTypes.func.isRequired
}
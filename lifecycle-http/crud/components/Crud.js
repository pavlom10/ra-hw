import React from 'react';

import CrudNotes from './CrudNotes'
import CrudForm from './CrudForm'

export default class Crud extends React.Component {

    state = {
        notes: []
    }

    handleAdd = notes => {

        fetch(`${process.env.REACT_APP_API_URL}/`, {
            method: 'POST',
            body: JSON.stringify(notes)            
          })
          .then(response => response)
          .then(
            this.setState({
                notes: [...this.state.notes, notes]
            })
          )        
    }
    
    handleDelete = id => {

        fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
            method: 'DELETE',
        })
        .then(response => response) 
        .then(
            this.setState({
                notes: this.state.notes.filter(item => item.id !== id)
            })             
        )
    }

    handleUpdate = () => {

        fetch(`${process.env.REACT_APP_API_URL}`, {
            method: 'GET',
        })
        .then(response => response.json()) 
        .then(
            arr =>
            this.setState({
                notes: arr
            })            
        )
    }

    render() {

        const {notes} = this.state;

        return (
            <>
                Notes <button onClick={this.handleUpdate}>Update</button>
                <CrudNotes notes={notes} onDelete={this.handleDelete} />
                <CrudForm onAdd={this.handleAdd} />
            </>
        )

    }

}
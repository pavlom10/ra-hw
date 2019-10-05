import React from 'react';
import PropTypes from 'prop-types';

import Toolbar from './Toolbar';
import ProjectList from './ProjectList';


export default class Portfolio extends React.Component {

    static propTypes = {
        filters: PropTypes.array.isRequired,
        selected: PropTypes.string,
        projects: PropTypes.array.isRequired,
    }    

    constructor(props) {

        super(props);

        this.projects = props.projects;

        this.state = {
            filters: props.filters,
            selected: props.selected,
            projects: props.projects
        }        

    }    

    onSelectFilter = (filter) => {
        this.setState({
            selected: filter,
            projects: filter === 'All' ? this.projects : this.projects.filter(item => item.category === filter)
        })
    }      

    render () {

        return (
            <>
                <Toolbar
                    filters={this.state.filters}
                    selected={this.state.selected}
                    onSelectFilter={(filter) => this.onSelectFilter(filter)} 
                />
                <ProjectList projects={this.state.projects} />                
            </>
        );
        
    }
}

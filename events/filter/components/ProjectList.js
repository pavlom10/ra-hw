import React from 'react';
import PropTypes from 'prop-types';

export default function ProjectList(props) {
    
    const {projects} = props;

    return (
        <div className="portfolio">
            {projects.map((p, i) => 
                <img src={p.img} key={i} />
            )}
        </div>
    );

}

ProjectList.propTypes = {
    projects: PropTypes.array.isRequired
}
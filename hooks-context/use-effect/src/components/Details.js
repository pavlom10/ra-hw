import React from 'react';

export default function Details(props) {

    const {info} = props;

    // console.log(info);

    return (
        <>
            <img src={info.avatar} alt={info.name} />
            {info.name}

            <dl>
                <dt>City:</dt><dd>{info.details.city}</dd>
                <dt>Company:</dt><dd>{info.details.company}</dd>
                <dt>Position:</dt><dd>{info.details.position}</dd>
            </dl>
        </>
    );

}


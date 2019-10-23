import React from 'react';

export default function Cards(props) {

    const CardImg = ({src, alt}) => (
        <img src={src} className="card-img-top" alt={alt} />
    )

    const CardBody = ({title, text}) => (
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    )

    const Card = props => (
        <div className="card" style={{width: '18rem'}}>
            {props.children}
        </div>
    )

    return (
        <>
            <Card>
                <CardImg src='#' alt='...' />
                <CardBody 
                    title='Card title' 
                    text="Some quick example text to build on the card title and make up the bulk of the card's content."
                />
            </Card>
            
            <Card>
                <CardBody 
                    title='Special title treatment' 
                    text='With supporting text below as a natural lead-in to additional content.' 
                />
            </Card>
        </>
    )
}

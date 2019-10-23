import React from 'react';

/*
    Промоблок над поисковой строкой
*/
export default function Promo(props) {

    return (
        <div className="promoBlock">
            <img src="{props.img}" />
            <a href="#">{props.title}</a>
            <p href="#">{props.text}</p>
        </div>
    );

}

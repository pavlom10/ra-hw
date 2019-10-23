import React from 'react';

/*
    Баннер под поисковой строкой
*/
export default function Banner(props) {

    return (
        <div className="banner">
            <a href="{props.link}">
                <img src="{props.img}" />
            </a>
        </div>
    );

}

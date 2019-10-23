import React from 'react';

/*
    Поисковая строка
*/
export default function SearchLine(props) {

    const menu = ['Видео', 'Картинки', 'Новости', 'Карты', 'Маркет', 'Эфир'];

    const SearchMenu = ({menu}) => (
        <ul>
            {menu.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    )
  
    return (
        <>
            <div className="homeLogo"></div>
            <SearchMenu menu={menu} />
            <input type="text" name="text" />
            <button>Найти</button>
        </>
    );

}

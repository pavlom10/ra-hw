import React from 'react';

/*
    Блок новостей над строкой поиска
*/
export default function News(props) {

    const menu = ['Сейчас в СМИ', 'В Германии', 'Рекомендуем'];

    const list  = [
        {icon: '...', 'link': '#', 'title': 'Новость 1'},
        {icon: '...', 'link': '#', 'title': 'Новость 2'},
        {icon: '...', 'link': '#', 'title': 'Новость 3'}
    ];    

    const NewsMenu = ({menu}) => (
        <ul>
            {menu.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    )

    const NewsItem = (props) => (
        <li>{props.icon} <a href="{props.link}">{props.title}</a></li>
    )

    const NewsList = ({list}) => (
        <ul>
            {list.map((item, index) => <NewsItem key={index} {...item} />)}
        </ul>
    );    
  
    return (
        <>
            <NewsMenu menu={menu} />
            <NewsList list={list} />
        </>
    );

}

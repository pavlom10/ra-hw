import React from 'react';

import News from './News'
import Promo from './Promo'
import SearchLine from './SearchLine'
import Banner from './Banner'
import Widgets from './Widgets'

export default function Yandex(props) {

    return (
        <>
            <News />
            <Promo img='...' title='Работа над ошибками' text='Смотрите на Яндексе и запоминайте' />
            <SearchLine />
            <Banner link='#' img='banner.gif' />
            <Widgets />
        </>
    );

}



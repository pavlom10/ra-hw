import React from 'react';

/*
    Виджеты под поисковой строкой
*/
export default function Widgets(props) {

    const Widget = props => ( 
        <div className="widget">
            <div>{props.title}</div>
            {props.children} 
        </div>
    )    

    return (
        <div className="widgets">

            <Widget title='Погода'>
                +17
                Утром +17
                Днем +20
            </Widget>

            <Widget title='Карта Германии'>
                Расписания
            </Widget>

            <Widget title='Посещаемое'>
                <ul>
                    <b>Недвижимость</b> &mdash; о сталинках
                    <b>Маркет</b> &mdash; люстры и светильники
                    <b>Авто.ру</b> &mdash; привод 4х4 до 500 000
                </ul>
            </Widget>

            <Widget title='Телепрограмма'>
                02:00 ТНТ.Best
            </Widget>

            <Widget title='Эфир'>
                Управление как искусство
            </Widget>

        </div>


    );

}





import React from 'react';
import Card from './Card';

const CardList = (props) => {
    const robots = props.robots.map((el) => {
        return (
            <Card id={el.id} name={el.name} nickname={el.nickname} email={el.nickname} />
        )
    });
    return (
        <div>
            {robots}
        </div>
    )
}

export default CardList;
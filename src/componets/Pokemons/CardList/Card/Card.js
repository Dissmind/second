import React from 'react'
import './Card.css'

export const Card = prop => {

    const card = prop.card

    return (
        <div className='Card'>
            <img src={card.imageUrl} alt="card image"/>
            <div className="row">Name: {card.name}</div>
            <div className="row">Artist: {card.artist}</div>
        </div>
    )
}
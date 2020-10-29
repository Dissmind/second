import React from 'react'
import './Card.css'


export const Card = ({card, onHandler}) => (
    <div
        className='Card'
        onClick={onHandler}
    >
        <div>
            <div className={'center-wrapper'}>
                <img src={card.imageUrl} alt="card image"/>
            </div>

            <div className="info">
                <div className="row center-wrapper">Name: {card.name}</div>
                <div className="row center-wrapper">Artist: {card.artist}</div>
            </div>
        </div>
    </div>
)
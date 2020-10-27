import React from 'react'
import './CardList.css'

import { Card } from './Card/Card.js'
import { GetCards } from '../../../API/PokemonRepository.js'


export default function CardList(prop) {
    if (prop.cards == null) {
        prop.setCards(GetCards())
    }

    console.log(prop.cards)

    return (
        <div className={'CardList'}>
            {

                (prop.cards != null)
                ? prop.cards.map(card => <Card card={card} />)
                : null
            }
        </div>
    )
}
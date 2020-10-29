import React from 'react'
import './CardList.css'

import { Card } from './Card/Card.js'
import { GetCards } from '../../../API/PokemonRepository.js'


export default function CardList({cards, setCards, onOpen}) {
    if (cards == null) {
        setCards(GetCards())
    }


    return (
        <div className={'CardList'}>
            <div className="list">
                {
                    (cards != null)
                        ? cards.map(
                                card => <Card
                                    onHandler={() => onOpen(card)}
                                    card={card}
                                />
                            )
                        : null
                }
            </div>
        </div>
    )
}
import React from 'react'
import './CardView.css'
import { GetCard } from '../../API/PokemonRepository.js'


export default function CardView({id}) {

    const card = GetCard(id)[0]

    return (
        <div className={'CardView'}>
            <div className="row-block">

                <div className={'img'}>
                    <img src={card.imageUrlHiRes} alt=""/>
                </div>

                <div className="info">
                    <div className="text">
                        <div className="row">Name:
                            <div className="value">{card.name || 'Not found Name'}</div>
                        </div>
                        <div className="row">Id:
                            <div className="value">{card.id || 'Not found Id'}</div>
                        </div>
                        <div className="row">Number:
                            <div className="value">{card.nationalPokedexNumber || 'Not found Number'}</div>
                        </div>
                        <div className="row">HP:
                            <div className="value">{card.hp || 'Not found HP'}</div>
                        </div>
                        <div className="row">Type:
                            <div className="value">{card.types || 'Not found Types'}</div>
                        </div>
                        <div className="row">SubType:
                            <div className="value">{card.subtype || 'Not found SubType'}</div>
                        </div>

                        <hr/>

                        <div className="row">
                            <div className="description">{card.text || 'Not found Description'}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
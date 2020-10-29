import React from 'react'
import './CardPopup.css'

import { Button } from '../../../UI/Button/Button.js'
import { Link } from 'react-router-dom'


export const CardPopup = ({card}) => (
    <div className={'CardPopup'}>
        <div className="info">
            <div className="img">
                <img src={card.imageUrlHiRes} alt=""/>
            </div>

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



        <div className="center-wrapper">
            <Link to={'pokemons/' + card.id}>
                <Button>More info</Button>
            </Link>
        </div>
    </div>
)
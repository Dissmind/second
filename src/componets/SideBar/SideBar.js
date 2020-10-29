import React, {Suspense} from 'react'
import ReactDOM from 'react-dom'
import './SideBar.css'

import { DropDown } from '../../UI/DropDown/DropDown.js'
import { GetSubTypes, GetTypes } from '../../API/PokemonRepository.js'
import useAxios, { axios } from 'axios-hook'


export default function SideBar(prop) {
    const types = GetTypes()
    const subTypes = GetSubTypes()

    const Filter = (event, type) => {
        const value = event.target.value

        const url = `https://api.pokemontcg.io/v1/cards/?supertype=Pokémon&${type}=${value}`
        axios.get(url)
            .then(response => prop.setCards(response.data.cards));
    }

    return (
        <div className={'SideBar'}>
            <DropDown
                default={'Type'}
                options={types}
                onChange={(event) => {Filter(event, 'types')}}
            />

            <DropDown
                default={'Subtype'}
                options={subTypes}
                onChange={(event) => {Filter(event, 'subtype')}}
            />
        </div>
    )
}

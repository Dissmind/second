import React, { Suspense, useState } from 'react'
import './Pokemons.css'

import CardList from './CardList/CardList.js'
import SideBar from './SideBar/SideBar.js'
import Header from './Header/Header.js'
import { GetCards } from '../../API/PokemonRepository.js'


function Pokemons() {

    const [cards, setCards] = useState(null)


    return (
        // <Suspense fallback={<p>Loading</p>}>
            <div className={'Pokemons'}>
                <Header />

                <div className="row-block">
                    <Suspense fallback={<p>Loading</p>}>
                        <SideBar
                            setCards={setCards}
                        />
                    </Suspense>

                    <Suspense fallback={<p>Loading</p>}>
                        <CardList
                            cards={cards}
                            setCards={setCards}
                        />
                    </Suspense>
                </div>
            </div>
        // </Suspense>
    )
}


export default Pokemons



// {
//     "id": "xy7-10",
//     "name": "Vespiquen",
//     "nationalPokedexNumber": 416,
//     "imageUrl": "https://images.pokemontcg.io/xy7/10.png",
//     "imageUrlHiRes": "https://images.pokemontcg.io/xy7/10_hires.png",
//     "types": [
//     "Grass"
// ],
//     "supertype": "Pokémon",
//     "subtype": "Stage 1",
//     "evolvesFrom": "Combee",
//     "hp": "90",
//     "number": "10",
//     "artist": "kawayoo",
//     "rarity": "Uncommon",
//     "series": "XY",
//     "set": "Ancient Origins",
//     "setCode": "xy7",
//     "attacks": [
//     {
//         "cost": [
//             "Colorless"
//         ],
//         "name": "Intelligence Gathering",
//         "text": "You may draw cards until you have 6 cards in your hand.",
//         "damage": "10",
//         "convertedEnergyCost": 1
//     },
//     {
//         "cost": [
//             "Colorless",
//             "Colorless"
//         ],
//         "name": "Bee Revenge",
//         "text": "This attack does 10 more damage for each Pokémon in your discard pile.",
//         "damage": "20+",
//         "convertedEnergyCost": 2
//     }
// ],
//     "weaknesses": [
//     {
//         "type": "Fire",
//         "value": "×2"
//     }
// ]
// }
import { useAxios } from 'use-axios'



const domain = 'https://api.pokemontcg.io/v1/'


export function GetTypes() {
    const url =  domain + 'types'
    return useAxios(url).data.types
}


export function GetSubTypes() {
    const url = domain + 'subtypes'
    return useAxios(url).data.subtypes
}


export function GetCards() {
    let url = domain + 'cards/?supertype=Pokémon'

    return useAxios(url).data.cards
}


export function GetCard(id) {
    let url = domain + 'cards/?supertype=Pokémon&id=' + id

    return useAxios(url).data.cards
}
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


export function GetCards(type = null, value = null) {
    let url = domain + 'cards/?supertype=Pokémon'

    if (type != null) {
        url += `&${type}=${value}`
    }

    const result = useAxios(url).data.cards
    return result
}
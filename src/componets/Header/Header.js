import React from 'react'
import './Header.css'

import { useHistory } from 'react-router-dom'


export default function Header({backButton}) {

    const route = useHistory()

    return (
        <div className={'Header'}>

            {
                (backButton)
                    ?   <div
                            className={'back'}
                            onClick={route.goBack}
                        >&lt; Back</div>
                    : null
            }


            <div
                onClick={() => {route.push('/')}}
                className={'signOut'}
            >
                    SignOut
            </div>
        </div>
    )
}
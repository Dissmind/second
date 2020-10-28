import React, { useState } from 'react'

import './Login.css'
import { Popup } from '../../UI/Popup/Popup.js'
import { Opt } from './Opt/Opt.js'
import { Auth } from './Auth/Auth.js'


function Login() {
    const [opt, setOpt] = useState(false)



    return (
        <div className='Login'>
            <Auth onSignIn={() => {setOpt(true)}} />

            {
                (opt)
                    ?
                    <Popup
                        width={20}
                        height={30}
                        onClose={() => {setOpt(false)}}
                    >
                        <Opt />
                    </Popup>
                    : null
            }
        </div>
    )
}

export default Login
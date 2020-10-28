import React, { useState } from 'react'
import './Auth.css'
import { Button } from '../../../UI/Button/Button.js'


export const Auth = ({onSignIn}) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    // Заглушка
    const check = (login, password) => (
        login    == '123' &&

        password == '123'
    )

    const onSubmit = (event) => {
        event.preventDefault()

        if (check(login, password)) {
            onSignIn()
        } else {
            alert('is not correct')
        }
    }

    const handleChange = (setState) => (e) => {
        setState(e.target.value);
    }

    return (
        <div className="Auth">

            <div className="center-wrapper">
                <form>
                    <h1>Sign In</h1>
                    <div className="login">
                        <label htmlFor="login">Login</label>
                        <input
                            id='login'
                            type="text"
                            required
                            onChange={handleChange(setLogin)}
                        />
                    </div>

                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input
                            id='password'
                            type="password"
                            required
                            onChange={handleChange(setPassword)}
                        />
                    </div>

                    <div className={'button-wrapper'}>
                        <Button
                            onHandler={onSubmit}
                        >Sign in</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
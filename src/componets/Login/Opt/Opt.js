import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Opt.css'
import { Button } from '../../../UI/Button/Button.js'


export const Opt = props => {

    const [code, setCode] = useState('')
    const [error, setError] = useState('')

    const history = useHistory()

    // Заглушка
    const check = code => code === '123123'

    const handleChange = (setState) => (e) => {
        setState(e.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault()

        if (check(code)) {
            history.push('/pokemons')
        } else {
            setCode('')
            setError('Not access')
        }
    }

    return (
        <div className={'Opt'}>
            <form>
                <h1>Code from SMS</h1>
                <div className="code">
                    {/*<label htmlFor="code">Code</label>*/}
                    <input
                        id='code'
                        type="code"
                        required
                        onChange={handleChange(setCode)}
                    />

                    {/*<div className="error">{error}</div>*/}
                </div>

                <div className="center-wrapper">
                    <Button
                        onHandler={onSubmit}
                    >Next</Button>
                </div>
            </form>
        </div>
    )
}
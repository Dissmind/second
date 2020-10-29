import React from 'react'
import './Button.css'


export const Button = ({children, onHandler}) => (
    <div
        className={'Button'}
        onClick={onHandler}
    >
        {children}
    </div>
)
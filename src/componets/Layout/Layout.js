import React from 'react'
import './Layout.css'
import Header from '../Header/Header.js'


export const Layout = ({backButton, children}) => (
    <div className={'Layout'}>
        <Header backButton={backButton} />

        <div className="window">
            {children}
        </div>
    </div>
)
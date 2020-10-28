import React, { useEffect } from 'react'
import './Popup.css'




export const Popup = ({width, height, onClose, children}) => {

    const position = (val) => {
        return (100 - val) / 2
    }


    const stl = {
        height: height + 'vh',
        width: width + '%',
        top: (position(height) - 5) + 'vh',
        left: position(width) + '%'
    }


    const onOverlayClose = (event) => {
        if (event.target == event.currentTarget) {
            onClose()
        }
    }

    const onEscClose = (event) => {
        const ESC_CODE = 27
        if (event.keyCode === ESC_CODE) {
            onClose()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', onEscClose)

        return () => {document.removeEventListener('keydown', onEscClose)}
    })


    return (
        <div
            className={'Popup'}
            onKeyPress={onEscClose}
            onClick={onOverlayClose}
        >
            <div
                className="content"
                style={stl}
            >
                {children}
            </div>
        </div>
    )
}

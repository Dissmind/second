import React from 'react'
import './DropDown.css'

export const DropDown = prop => (
    <span className="DropDown">
        <select
            onChange={prop.onChange}
        >
            <option>{prop.default}</option>
            {
                (prop.options.length != undefined)
                    ? prop.options.map(i => <option>{i}</option>)
                    : null
            }
        </select>
    </span>
)
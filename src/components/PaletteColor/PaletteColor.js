import React, { useState, useRef } from 'react'
import './palettecolor.css'

function PaletteColor(props) {

    const { color, name, convertColor } = props

    const [isVisible, setIsVisible] = useState(false)
    const colorTimeoutRef = useRef(null)

    const updateFullSCreenColorVisibility = () => {
        setIsVisible(prev => !prev)
        navigator.clipboard.writeText(color)
        colorTimeoutRef.current = setTimeout(() => {
            setIsVisible(false)
            clearTimeout(colorTimeoutRef.current)
        }, 2000)
    }

    return (
        <>
            <div className="palette-color-container" style={{ backgroundColor: color }} onClick={updateFullSCreenColorVisibility}>
                <span className="palette-copy-btn">Copy</span>
                <span className="palette-color-name">{name}</span>
            </div>

            {isVisible && <div className="palette-color-fullscreen" style={{ backgroundColor: color }}>
                <h2>copied</h2>
                <p>{convertColor(color)}</p>
            </div>}
        </>
    )
}

export default PaletteColor
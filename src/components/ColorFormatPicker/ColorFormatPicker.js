import React, { useState } from 'react'
import './colorformatpicker.css'

function ColorFormatPicker(props) {

    const { updateFormat, text } = props

    const [isVisible, setIsVisible] = useState(false)

    const showPicker = () => {
        setIsVisible(prev => !prev)
    }

    const hidePicker = () => {
        setIsVisible(false)
    }

    const selectColor = (e, color) => {
        e.stopPropagation()
        updateFormat(color)
        hidePicker()
    }

    return (
        <div className="color-format-picker-cont">
            <span className="color-format-text" onClick={showPicker}>
                Color Format: {text}
                <i className="fa-solid fa-chevron-down padding-left-4"></i>
            </span>

            {isVisible && <div className="color-format-container" onClick={hidePicker}>
                <div className="color-format-picker-box">
                    <button onClick={(e) => selectColor(e, "hex")}>HEX (#FFFFFF)</button>
                    <button onClick={(e) => selectColor(e, "rgb")}>RGB (255, 255, 255)</button>
                    <button onClick={(e) => selectColor(e, "rgba")}>RGBA (255, 255, 255, 1.0)</button>
                </div>
            </div>}
        </div>
    )
}

export default ColorFormatPicker
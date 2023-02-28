import React from 'react'
import './paletteheader.css'
import { Link } from 'react-router-dom'
import ColorFormatPicker from '../ColorFormatPicker/ColorFormatPicker'

function PaletteHeader(props) {

    const {updateFormat, text} = props

    return (
        <div className="palette-page-header">
            <div className="palette-header-left">
                <Link className="palette-header-back-btn" to="/">
                    <i className="fa-solid fa-arrow-left padding-right-4"></i>
                    Back</Link>
            </div>
            <div className="palette-header-center">
                <ColorFormatPicker text={text} updateFormat={updateFormat} />
            </div>
            <div className="palette-header-right"></div>
        </div>
    )
}

export default PaletteHeader
import React, { useState } from 'react'
import './ColorPicker.css'
import Helmet from 'react-helmet'

import { SketchPicker } from 'react-color';
function ColorPicker() {
    const [currentColor, setCurrentColor] = useState("")
    const handleOnChange = (color)=>{
        setCurrentColor(color.hex)
    }
    const  appStyle={
        backgroundColor:currentColor,
        height: '84.6vh',
        justifyContent:"center",
        textAlign:"center"
    }
    return (
        <>
        <Helmet>
            <title>Color Picker</title>
        </Helmet>
        <div style={appStyle} className="cPicker">
            <h1>Color Picker</h1>
            <SketchPicker 
            color={currentColor}
            onChangeComplete={handleOnChange}
            />
            <h1>Here's Your color code: {currentColor}</h1>
            
        </div>
           
        </>
    )
}

export default ColorPicker
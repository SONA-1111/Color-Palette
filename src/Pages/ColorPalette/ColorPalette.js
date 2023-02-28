import React, { useState, useEffect } from 'react'
import PaletteHeader from '../../components/PaletteHeader/PaletteHeader'
import './colorpalette.css'
import { useLocation } from 'react-router-dom'
import data from '../../data/data'
import PaletteColor from '../../components/PaletteColor/PaletteColor'
import Helmet from 'react-helmet'

function ColorPalette() {

    const location = useLocation()

    const [pageData, setPageData] = useState({})

    const [colorFormat, setColorFormat] = useState('hex')

    const selectorText = () => {
        if(colorFormat === 'hex') {
            return "Hex (#001122)"
        }
        if(colorFormat === 'rgb'){
            return "RGB (0, 0, 0)"
        }
        if(colorFormat === 'rgba'){
            return "RGBA (0, 0, 0, 1)"
        }
        return '---'
    }

    const updateColorFormat = (format) => {
        setColorFormat(format)
    }

    function hexToRgb(hex) {
        const val = hex.replace('#', '')
        var bigint = parseInt(val, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;
    
        return 'rgb(' + r + ", " + g + ", " + b + ')';
    }

    function hexToRgba(hex, transparency = 1) {
        const val = hex.replace('#', '')
        var bigint = parseInt(val, 16);
        var r = (bigint >> 16) & 255;
        var g = (bigint >> 8) & 255;
        var b = bigint & 255;
    
        return 'rgba(' + r + ", " + g + ", " + b + ', ' + transparency + ')';
    }

    const convertColor = (hex) => {
        if(colorFormat === 'rgb'){
            return hexToRgb(hex)
        }
        if(colorFormat === 'rgba'){
            return hexToRgba(hex)
        }
        return hex
    }

    useEffect(() => {
        let paletteCode = location.pathname.split('/')
        paletteCode = paletteCode[paletteCode.indexOf('palette') + 1]

        const array = data.filter(item => {
            if(item.url){
                return item.url === paletteCode.toUpperCase()
            }
            return item.paletteCode === paletteCode.toUpperCase()
        })
        setPageData(array[0])
    }, [location.pathname])


    return (
        <>
        <Helmet>
            <title>{pageData?.paletteName ?? 'Color Palette'}</title>
        </Helmet>
            <PaletteHeader updateFormat={updateColorFormat} text={selectorText()} />
            <div className="palette-colors-container">
                {pageData?.palette?.map((item, index) => (
                    <PaletteColor convertColor={convertColor} color={convertColor(item.hex)} name={item.name} key={item.name + index} />
                ))}
            </div>
        </>
    )
}

export default ColorPalette
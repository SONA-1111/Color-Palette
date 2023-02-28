import React from 'react'
import './homecolorcard.css'

function HomeColorCard(props) {

    const {
        colors = [],
        paletteName = '',
        paletteCode = '',
        onClick,
        url
    } = props

    const generateUrl = () => {
        if(url){
            return url.toLowerCase()
        }
        else{
            return paletteCode.toLowerCase()
        }
    }

    return (
        <div className="home-card" onClick={() => onClick(generateUrl())}>
            <div className="home-card-colors">
                {colors.map((item, index) => (
                <div className="home-card-color" style={{ backgroundColor: item.hex }} key={item.hex + index}></div>)
            )}
            </div>

            <div className="home-card-title-container">
                <span className="home-card-title">{paletteName}</span>
                <span className="home-card-code">{paletteCode}</span>
            </div>
        </div>
    )
}

export default HomeColorCard
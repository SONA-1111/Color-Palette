import React from 'react'
import './home.css'
import HomeColorCard from '../../components/HomeColorCard/HomeColorCard'
import data from '../../data/data'
import Helmet from 'react-helmet'

import { useNavigate } from 'react-router-dom'

function Home() {

    const navigate = useNavigate()

    const clickHandler = (param) => {
        if(!param) return
        navigate('/palette/' + param)
    }

    return (
        <>
        <Helmet>
            <title>Color Palettes</title>
        </Helmet>
            <div className="home-card-container">
                {data?.map(item => (
                    <HomeColorCard key={item.paletteCode}
                        colors={item.palette}
                        paletteName={item.paletteName}
                        paletteCode={item.paletteCode}
                        onClick={clickHandler}
                        url={item.url}
                    />))}

            </div>
        </>
    )
}

export default Home
import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'


const nav = [
    {
        title: "Gradient",
        href: "/gradientGenerator",
        isExternal: false
    },
    // {
    //     title: "Subscribe",
    //     href: "https://www.youtube.com/channel/UCbZh94w-Gj1VlQ3piPAFXWw",
    //     isExternal: true
    // },
    // {
    //     title: "Instagram",
    //     href: "https://www.instagram.com/shanu_the_web_dev/",
    //     isExternal: true
    // },
]

function Header() {
    return (
        <header>
            <div className="header-left">
                <h1 className="">
                    <Link className='site-title' to="/">Color Palettes</Link>
                </h1>
            </div>

            <div className="header-right">
                <nav>
                    <ul>
                        {nav.map(item => (
                            <li key={item.title}>
                                {item.isExternal ? <a href={item.href}>{item.title}</a> : <Link to={item.href}>{item.title}</Link>}

                            </li>)
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
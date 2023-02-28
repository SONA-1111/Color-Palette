import React, { useState, useEffect, useRef } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './layout.css'
import PageTransition from '../PageTransition/PageTransition'
import { useLocation } from 'react-router-dom'

function Layout(props) {

    const location = useLocation()

    const transitionRef = useRef(null)

    const [pathname, setPathname] = useState(location.pathname)
    const [transition, setTransition] = useState(false)

    useEffect(() => {
        if(location.pathname !== pathname){
            setPathname(location.pathname)
            setTransition(true)
            transitionRef.current = setTimeout(() => {
                setTransition(false)
                clearTimeout(transitionRef.current)
            }, 1100)
        }
        // eslint-disable-next-line
    }, [location.pathname])

    const { children } = props

    return (
        <div className="siteWrapper">
            <Header />
            <div className="page-container">
                {children}
            </div>
            <Footer />
            {transition && <PageTransition direction={location.pathname === '/' ? 'r2l' : 'l2r'} />}
        </div>
    )
}

export default Layout
import React from 'react'
import { Link } from 'react-router-dom'
import './error404.css'
import Helmet from 'react-helmet'

function Error404() {
    return (
        <>
        <Helmet>
            <title>Page Not Found</title>
        </Helmet>
            <div className="error404">
                <p className="error404-oops">Oops!!!</p>
                <span>404</span>
                <p className="error404-text">
                    <span>You Lost </span>
                    <Link to='/' className="error404-home-btn">Go to Home</Link>
                </p>
            </div>
        </>
    )
}

export default Error404
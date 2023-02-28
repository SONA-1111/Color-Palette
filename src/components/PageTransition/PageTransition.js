import React from 'react'
import './pagetransition.css'

function PageTransition(props) {
    const { direction } = props
    return (
        <div className={`pageTransition animate-${direction}`}></div>
    )
}

export default PageTransition
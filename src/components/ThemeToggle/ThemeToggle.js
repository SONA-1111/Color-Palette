import React, { useEffect, useState } from 'react'
import './themetoggle.css'

function ThemeToggle() {

    const [theme, setTheme] = useState('light')

    const updateTheme = (e) => {
        const { checked } = e.target
        setTheme(checked ? 'dark' : 'light')
        localStorage.setItem('theme', checked ? 'dark' : 'light')
    }

    useEffect(() => {
        
        if(theme === 'dark') {
            document.body.classList.add('theme-dark')
            document.body.classList.remove('theme-light')
        }
        else{
            document.body.classList.add('theme-light')
            document.body.classList.remove('theme-dark')
        }
    }, [theme])

    useEffect(() => {
        const defaultTheme = localStorage.getItem('theme')
        if(defaultTheme) setTheme(defaultTheme)
    }, [])

    return (
        <div style={{ position: 'fixed', bottom: '25px', right: '25px' }}>
            <input type="checkbox" className="checkbox" id="checkbox" onChange={updateTheme} checked={theme === 'light' ? false : true} />
            <label htmlFor="checkbox" className="label">
                <i className="fas fa-moon"></i>
                <i className='fas fa-sun'></i>
                <div className='ball'></div>
            </label>
        </div>
    )
}

export default ThemeToggle
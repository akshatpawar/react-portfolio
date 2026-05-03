import React from 'react'
import "./DarkMode.css";

const darkmode = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute('data-theme','dark')
    }
    const setLightMode = () => {
        document.querySelector("body").setAttribute('data-theme','light')
    }

    const toggleTheme = (e) => {
        if (e.target.checked) setLightMode();
        else setDarkMode();
    }
    
    return (
        <div className='darkmode'>
            <label className="switch">
                <input type="checkbox" onChange={toggleTheme}/>
                <span className="slider"></span>
            </label>
        </div>
    )
}

export default darkmode
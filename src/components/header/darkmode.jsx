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
            <label class="switch">
                <input type="checkbox" onChange={toggleTheme}/>
                <span class="slider"></span>
            </label>
        </div>
    )
}

export default darkmode
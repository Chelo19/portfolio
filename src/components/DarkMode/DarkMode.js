import './DarkMode.css';
import React, { useEffect, useState } from 'react';
import sun from '../../assets/icons/sun.png';
import moon from '../../assets/icons/moon.png';

const DartkMode = () => {
    const [selectedThemeState, setSelectedThemeState] = useState('light');

    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark")
        localStorage.setItem("selectedTheme", "dark");
        setSelectedThemeState('dark');
    }

    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light")
        localStorage.setItem("selectedTheme", "light"); 
        setSelectedThemeState('light');
    }

    const selectedTheme = localStorage.getItem("selectedTheme");

    useEffect(() => {
        if (selectedTheme === 'dark') {
            setDarkMode();
        }
    }, []);

    const toggleTheme = (e) => {
        if(e.target.checked) setDarkMode();
        else setLightMode();
    }

    return(
        <div className="dark_mode">
            <div className="dark_mode_checkbox">
                <img style={selectedTheme === 'dark' ? {filter: 'invert(1)'} : {}} src={sun} alt='sun'/>
                <label className="dark_mode_switch">
                    <input
                        type="checkbox"
                        onChange={(e) => toggleTheme(e)}
                        defaultChecked={selectedTheme === "dark"}
                    />
                    <span className="dark_mode_slider round"> </span>
                </label>
                <img style={selectedThemeState === 'dark' ? {filter: 'invert(1)'} : {}} src={moon} alt='moon'/>
            </div>
        </div>
    )
}

export default DartkMode;
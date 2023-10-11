import { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

export default function MainGallery(){
    const [theme, setTheme] = useState('light');
    const [frUnit, setFrUnit] = useState('48');
    
    useEffect(() => {
        if(theme == 'dark'){
            document.querySelector('html').classList.add('dark');
        }
        else{
            document.querySelector('html').classList.remove('dark');
        }
    }, [theme]);

    const handleThemeChange = () => {
        setTheme(prevTheme => prevTheme == 'light' ? 'dark' : 'light');
    };

    return(
        <div className="inline-grid grid-cols-4 gap-4">
            <div className="p-4 w-auto h-auto bg-orange-300 shadow-lg rounded-lg flex justify-center items-center col-span-3 row-span-2">Marcelo</div>
            <div className={`p-4 w-${frUnit} h-${frUnit} bg-orange-500 shadow-lg rounded-lg flex justify-center items-center`}><button onClick={handleThemeChange}>DarkMode</button></div>
            <div className={`p-4 w-${frUnit} h-${frUnit} bg-orange-600 shadow-lg rounded-lg flex justify-center items-center`}>Idioma</div>
            <a href='https://www.linkedin.com/in/marcelo-amado-de-león-gómez-2190a2203/' target='_blank' className={`p-4 w-${frUnit} h-${frUnit} bg-orange-400 shadow-lg rounded-lg flex justify-center items-center`}>LinkedIn</a>
            <a href='https://github.com/Chelo19' target='_blank' className={`p-4 w-${frUnit} h-${frUnit} bg-orange-300 shadow-lg rounded-lg flex justify-center items-center`}>GH</a>
            <div className={`p-4 w-auto h-${frUnit} bg-orange-400 shadow-lg rounded-lg flex justify-center items-center col-span-2`}>06</div>
            <div className={`p-4 w-${frUnit} h-${frUnit} bg-orange-200 shadow-lg rounded-lg flex justify-center items-center`}>07</div>
        </div>
    )
}
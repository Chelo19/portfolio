import { useState, useEffect } from 'react';
import { Fade, Flip, Slide, JackInTheBox } from 'react-awesome-reveal';
import 'tailwindcss/tailwind.css';

export default function NavBar(){
    return(
        <div className="inline-flex gap-4">
            <Slide className="w-28 text-gray-200 p-1 grid-span-2 bg-slate-500 rounded-lg font-medium">
                <Fade cascade duration={200} triggerOnce={true}>Home</Fade>
            </Slide>
            <a href='https://github.com/Chelo19' target='_blank' className="w-28 text-gray-200 p-1 grid-span-2 bg-slate-500 rounded-lg font-medium">
                <Fade cascade duration={200} triggerOnce={true}>CV</Fade>
            </a>
            <a href='https://github.com/Chelo19' target='_blank' className="w-28 text-gray-200 p-1 grid-span-2 bg-slate-500 rounded-lg font-medium">
                <Fade cascade duration={200} triggerOnce={true}>Proyectos</Fade>
            </a>
        </div>
    )
}
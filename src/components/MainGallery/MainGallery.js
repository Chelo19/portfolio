import { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import marcelopng from '../../assets/marcelopng.png';
import { Fade, Flip, Slide, JackInTheBox } from 'react-awesome-reveal';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sunny.svg';
import next from '../../assets/return-down-forward.svg';
import link from '../../assets/link.svg';
import github from '../../assets/logo-github.svg';
import leetcode from '../../assets/leetcode.svg';
import coding from '../../assets/coding.gif';
import cv from '../../assets/cv_marcelo_de_leon.pdf';

export default function MainGallery(){
    const [theme, setTheme] = useState('light');
    const [darkShow, setDarkShow] = useState(false);
    const [lightShow, setLightShow] = useState(false);
    const [lang, setLang] = useState('esp');
    const [espShow, setEspShow] = useState(false);
    const [engShow, setEngShow] = useState(false);
    
    useEffect(() => {
        if(theme === 'dark'){
            document.querySelector('html').classList.add('dark');
            setDarkShow(true);
            setLightShow(false);
        }
        else{
            document.querySelector('html').classList.remove('dark');
            setDarkShow(false);
            setLightShow(true);
        }
    }, [theme]);

    const handleThemeChange = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    const handleLangChange = () => {
        if(lang === 'esp'){
            setLang('eng');
            setEspShow(true);
            setEngShow(false);
        }
        else{
            setLang('esp');
            setEspShow(false);
            setEngShow(true);
        }
    }


    return(
        <div className="inline-grid grid-cols-4 gap-4">
            <div className="p-4 w-auto h-auto bg-sky-700 shadow-lg rounded-lg flex justify-center items-center col-span-3 row-span-2 relative overflow-hidden group">
                <div className='absolute left-0 bottom-0 p-10 flex gap-3 flex-col w-96 justify-center h-full'>
                    <p className='m-0 flex justify-start'>{lang === 'esp' ? <Fade cascade duration={200} triggerOnce={true} className='text-3xl text-gray-200 text-left font-bold'>¡Hola, soy Marcelo!</Fade> : <Fade cascade duration={200} triggerOnce={true} className='text-3xl text-gray-200 text-left font-bold'>Hi, I'm Marcelo!</Fade>}</p>
                    <Slide duration={2000} triggerOnce={true} className='text-left text-gray-200 font-medium'>{lang === 'esp' ? <>Soy un desarrollador Full-Stack con experiencia en React. Me gusta trabajar en <strong className='font-extrabold'>HTML, CSS, PYTHON y SQL.</strong> Me gusta aprender nuevas tecnologías y soy muy atento a los detalles.</> : <>I am a Full-Stack developer with experience in React. I like working in <strong className='font-extrabold'>HTML, CSS, PYTHON and SQL.</strong> I like to learn new technologies and I am very attentive to details.</>}</Slide>
                </div>
                <Slide direction='right' triggerOnce={true} className='w-80 absolute top-0 right-0'><img className='w-full absolute' src={marcelopng}/></Slide>
            </div>
            <div className="p-4 w-48 h-48 bg-sky-600 shadow-lg rounded-lg flex justify-center items-center"><button className='w-auto h-auto' onClick={handleThemeChange}>{theme === 'light' ? <JackInTheBox triggerOnce={true} reverse={darkShow} duration={2000}><img className='w-28' style={{filter: 'invert(98%) sepia(1%) saturate(1030%) hue-rotate(183deg) brightness(95%) contrast(94%)'}} src={moon}/></JackInTheBox> : <Flip triggerOnce={true} reverse={lightShow}><img className='w-28' src={sun} style={{filter: 'invert(98%) sepia(1%) saturate(1030%) hue-rotate(183deg) brightness(95%) contrast(94%)'}}/></Flip>}</button></div>
            <div className="p-4 w-48 h-48 bg-sky-700 shadow-lg rounded-lg flex justify-center items-center"><button onClick={handleLangChange}>{lang === 'esp' ? 
            <JackInTheBox triggerOnce={true} reverse={espShow}>
                <div className='flex flex-col'>
                    <span className='text-6xl font-bold text-gray-200'>ESP.</span>
                    <span className='text-m font-bold text-gray-200 flex justify-center gap-1'><img className='w-5' src={next} style={{filter: 'invert(98%) sepia(1%) saturate(1030%) hue-rotate(183deg) brightness(95%) contrast(94%)'}}/>ENG</span>
                </div>
            </JackInTheBox> : 
            <Flip triggerOnce={true} reverse={lightShow}>
                <div className='flex flex-col'>
                    <span className='text-6xl font-bold text-gray-200'>ENG.</span>
                    <span className='text-m font-bold text-gray-200 flex justify-center gap-1'><img className='w-5' src={next} style={{filter: 'invert(98%) sepia(1%) saturate(1030%) hue-rotate(183deg) brightness(95%) contrast(94%)'}}/>ESP</span>
                </div>
            </Flip>}</button></div>
            <a href='https://www.linkedin.com/in/marcelo-amado-de-león-gómez-2190a2203/' target='_blank' className="p-4 w-48 h-48 bg-sky-800 shadow-lg rounded-lg flex justify-center items-center relative"><img className="w-10 absolute top-0 right-0 p-2" src={link} style={{filter: 'invert(98%) sepia(1%) saturate(1030%) hue-rotate(183deg) brightness(95%) contrast(94%)'}} alt="link"/><h1 className="text-8xl font-bold text-gray-200"><Fade cascade duration={2000} triggerOnce={true}>in</Fade></h1></a>
            <a href='https://github.com/Chelo19' target='_blank' className="p-4 w-48 h-48 bg-slate-700 shadow-lg rounded-lg flex justify-center items-center relative"><img className="w-10 absolute top-0 right-0 p-2" src={link} style={{filter: 'invert(98%) sepia(1%) saturate(1030%) hue-rotate(183deg) brightness(95%) contrast(94%)'}} alt="link"/><h1 className="text-6xl font-bold text-gray-200"><Fade duration={5000} triggerOnce={true}><img className="w-24" src={github} style={{filter: 'invert(98%) sepia(1%) saturate(1030%) hue-rotate(183deg) brightness(95%) contrast(94%)'}} alt="github"/></Fade></h1></a>
            <a href={cv} target='_blank' className="p-4 w-auto h-48 bg-sky-800 shadow-lg rounded-lg flex justify-center items-center col-span-2 relative overflow-hidden">
                <img className="w-10 absolute top-0 right-0 p-2" src={link} style={{filter: 'invert(98%) sepia(1%) saturate(1030%) hue-rotate(183deg) brightness(95%) contrast(94%)', zIndex: '3'}} alt="link"/>
                <div className="absolute left-0 bottom-0 p-4 z-10 flex flex-col gap-1">
                    <h1 className="text-3xl text-gray-200 text-left font-bold">{lang === 'esp' ? <Fade cascade duration={200} triggerOnce={true}>Currículum.</Fade> : <Fade cascade duration={200} triggerOnce={true}>Resume.</Fade>}</h1>
                    <Slide direction='right' duration={2000} triggerOnce={true} className="text-xl text-gray-200 text-left font-medium">{lang === 'esp' ? <>Dando click aquí puedes ir a mi currículum.</> : <>Clicking here will get you to my resume.</>}</Slide>
                </div>
                <div className="absolute w-full h-full bg-sky-800 opacity-25" style={{zIndex: '2'}}></div>
                <img className="absolute top-0 z-0" src={coding}/>
            </a>
            <a href='https://github.com/Chelo19?tab=repositories' target='_blank' className="p-4 w-auto h-48 bg-sky-500 shadow-lg rounded-lg flex justify-center items-center col-span-3 relative overflow-hidden">
                <img className="w-10 absolute top-0 right-0 p-2" src={link} style={{filter: 'invert(98%) sepia(1%) saturate(1030%) hue-rotate(183deg) brightness(95%) contrast(94%)', zIndex: '3'}} alt="link"/>
                <div className="absolute left-0 bottom-0 p-4 z-10 flex flex-col gap-1">
                    <h1 className="text-3xl text-gray-200 text-left font-bold">{lang === 'esp' ? <Fade cascade duration={200} triggerOnce={true}>Proyectos de alta calidad.</Fade> : <Fade cascade duration={200} triggerOnce={true}>Quality projects.</Fade>}</h1>
                    <Slide direction='right' duration={2000} triggerOnce={true} className="text-xl text-gray-200 text-left font-medium">{lang === 'esp' ? <>Siempre procuro trabajar dando todo de mí, entregando siempre el mejor producto posible.</> : <>I always try to give my best, always giving the best product possible.</>}</Slide>
                </div>
                <div className="absolute w-full h-full bg-sky-800 opacity-25" style={{zIndex: '2'}}></div>
                {/* <img className="absolute top-0 z-0" src={coding}/> */}
            </a>
            <a href='https://leetcode.com/marcelodeleongo/' target='_blank' className="p-4 w-48 h-48 bg-slate-500 shadow-lg rounded-lg flex justify-center items-center relative"><img className="w-10 absolute top-0 right-0 p-2" src={link} style={{filter: 'invert(98%) sepia(1%) saturate(1030%) hue-rotate(183deg) brightness(95%) contrast(94%)'}} alt="link"/><h1 className="text-6xl font-bold text-gray-200"><Fade duration={5000} triggerOnce={true}><img className="w-24" src={leetcode} style={{filter: 'invert(98%) sepia(1%) saturate(1030%) hue-rotate(183deg) brightness(95%) contrast(94%)'}} alt="github"/></Fade></h1></a>
            {/* <div className="p-4 w-48 h-48 bg-sky-600 shadow-lg col-span-2 rounded-lg flex justify-center items-center">07</div> */}
            {/* <div className="p-4 w-48 h-48 bg-sky-600 shadow-lg rounded-lg flex justify-center items-center">07</div> */}
        </div>
    )
}
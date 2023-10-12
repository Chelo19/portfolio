import MainGallery from '../../components/MainGallery/MainGallery';
import './LandingPage.css';
import 'tailwindcss/tailwind.css';

export default function LandingPage(){
    return(
        <div className="w-full flex justify-center items-center dark:bg-slate-800 py-12">
            <MainGallery/>
        </div>
    );
}
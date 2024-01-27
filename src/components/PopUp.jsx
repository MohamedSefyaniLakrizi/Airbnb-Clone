import { useState, useEffect } from 'react';
import popup_image from '../assets/popup-image.webp';
import popup_image_large from '../assets/popup-image-large.webp';

function PopUp(){
    const [showMobile, setShowMobile] = useState(false);
    const [show, setShow] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        // Check if the view is mobile
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
            setTimeout(() => {
                setShow(true);
                setShowMobile(true);
            }, 5000);
    }, []);

    useEffect(() => {
        // Disable scrolling when the popup is shown
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Enable scrolling when the component is unmounted
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [show]);

    return(
        <>
            {showMobile && show && <div className="fixed inset-0 bg-black opacity-50"></div>}
            <div className={`absolute md:fixed bottom-0 left-0 w-screen md:top-[50%] md:left-[50%] md:w-[900px] md:h-[550px] md:transform md:translate-x-[-50%] md:translate-y-[-50%] h-[55vh] rounded-t-lg md:rounded-lg md:flex-row-reverse z-10 bg-white transition-transform duration-300 md:flex overflow-hidden shadow-2xl ${show ? 'md:scale-1' : 'md:scale-0'} ${showMobile ? 'translate-y-0' : 'translate-y-full'}`}>
                <img src={isMobile ? popup_image : popup_image_large} alt="popup" className="w-full h-[50%] md:h-full md:w-[414px] md:object-cover object-cover rounded-t-lg" />
                <button onClick={() => { setShow(false); setShowMobile(false); }} className='absolute rounded-full top-[14px] left-4 p-2 bg-slate-100'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" className='block fill-none h-4 w-4 stroke-current stroke-[3] overflow-visible'><path d="m6 6 20 20M26 6 6 26"></path></svg>
                </button>
                <div className='flex flex-col gap-2 items-center justify-center p-5 w-auto md:w-full md:ml-16 md:p-0 md:mr-8'>
                    <h1 className=' font-bold text-[26px] md:text-[40px] md:w-[300px] leading-[1.2] tracking-tight text-center w-52'>Introducing Guest Favorites</h1>
                    <p className='text-sm w-[230px] leading-[18px] tracking-[0.01em] md:text-lg md:w-[300px] text-center text-gray-500 mb-3'>When you see a Guest Favorite, you'll know it's one of the 2 million most loved homes on Airbnb</p>
                    <a href="/" 
                        className='bg-[#222222] hover:bg-black focus:scale-90 transition-all duration-300 text-white font-semibold w-[88vw] md:w-auto py-[10px] rounded-lg text-sm md:text-lg md:py-4 md:px-8 text-center'
                     >Start exploring</a>
                </div>            
            </div>
        </>
    )
}

export default PopUp;
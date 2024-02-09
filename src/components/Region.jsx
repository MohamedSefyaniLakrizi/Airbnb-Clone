import { useState } from 'react';


function Region({ text, imgSrc, handleClickWho, setInputValue }){
    const handleClick = () => {
        const input = document.getElementById('search_destination');
        input.classList.add('font-normal');
        let regionName = '';
        switch (text) {
            case "I'm flexible":
                input.classList.remove('font-normal');
                break;
            case 'Europe':
                regionName = 'Europe';
                break;
            case 'Spain':
                regionName = 'Spain';
                break;
            case 'Middle East':
                regionName = 'Middle East';
                break;
            case 'Turkey':
                regionName = 'Turkey';
                break;
            case 'South East Asia':
                regionName = 'South East Asia';
                break;
            default:
                break;
        }
        
        setInputValue(regionName);
        handleClickWho();

    }

    return (
        <div>
            <img src={imgSrc} onClick={handleClick} alt={text} className=" select-none border border-gray-300 rounded-xl w-[122px] h-[122px] hover:border-black transition-all duration-200 " />
            <h1 className="mt-1 text-sm opacity-80">{text}</h1>
        </div>
    )
}

export default Region;
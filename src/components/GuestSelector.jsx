import React, {useState} from 'react';

function GuestSelector({text, subtext}){

    const [adultMinus, setAdultMinus] = useState(true);

    return(
        <div className={`flex flex-wrap h-[90px] items-center ${text !== 'Pets' ? 'border-b border-gray-300' : ''} `}>
            <div className="">
                <h1>{text}</h1>
                {text === 'Pets' ? 
                    <a href="example.com" className="underline">{subtext}</a> 
                    : 
                    <p>{subtext}</p>
                }
            </div>
            <div className="flex">
                <button>
                    <div className="p-2 rounded-full border border-gray-300">
                        <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className="block h-3 w-3"><path d="m.75 6.75h10.5v-1.5h-10.5z"></path></svg>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default GuestSelector;
import React, {useState, useEffect} from 'react';

function GuestSelector({text, subtext, disablePlus, onAdultChange, onChildrenChange, onInfantsChange, onPetsChange, noAdult}){

    const [minus, setMinus] = useState(true);
    const [plus, setPlus] = useState(false);
    const [guests, setGuests] = useState(0);

    useEffect(() => {
        if (disablePlus){
            setPlus(true);
        } else setPlus(false);
        if (noAdult && guests === 0){
            setMinus(false);
            setGuests( guests + 1);
        }
    }, [disablePlus, noAdult, setGuests, guests]);

    const handlePlus = () => {
        if (!plus && !disablePlus) {
            switch (text) {
                case 'Adults':
                    onAdultChange(1);
                    break;
                case 'Children':
                    onChildrenChange(1);
                    break;
                case 'Infants':
                    onInfantsChange(1);
                    break;
                case 'Pets':
                    onPetsChange(1);
                    break;
                default:
                    break;
            }
            setGuests(guests + 1);
        }
        if(guests === 0){
            setMinus(false);
        } else if (guests === 4 && text === 'Pets') {
            setPlus(true);
        } else if (guests === 15) {
            setPlus(true);
        } else if (guests === 4 && text === 'Infants') {
            setPlus(true);
        }
    }

    const handleMinus = () => {
        if (guests > 0) {
            switch (text) {
                case 'Adults':
                    onAdultChange(-1);
                    break;
                case 'Children':
                    onChildrenChange(-1);
                    break;
                case 'Infants':
                    onInfantsChange(-1);
                    break;
                case 'Pets':
                    onPetsChange(-1);
                    break;
                default:
                    break;
            }
            setGuests(guests - 1);
            setPlus(false);
            if(guests === 1) {
                setMinus(true);
            }
        }
    }

    return(
        <div className={`flex justify-between h-[90px] items-center ${text !== 'Pets' ? 'border-b border-gray-300' : ''} `}>
            <div className="">
                <h1 className='font-medium'>{text}</h1>
                {text === 'Pets' ? 
                    <a href="example.com" className="underline text-sm opacity-70">{subtext}</a> 
                    : 
                    <p className=' text-sm font-light opacity-70'>{subtext}</p>
                }
            </div>
            <div className="flex gap-3 items-center">
                <button onClick={handleMinus}>
                    <div className={`p-2 rounded-full border group hover:border-gray-800 ${minus ? 'border-gray-100' : 'border-gray-300'}`}>
                        <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className={`block h-3 w-3 group-hover:fill-gray-800 ${minus ? 'fill-gray-100' : 'fill-gray-300'} `}><path d="m.75 6.75h10.5v-1.5h-10.5z"></path></svg>
                    </div>
                </button>
                <div className=' w-[20px] flex justify-center'>
                    <p>{guests}</p>
                </div>
                <button onClick={handlePlus}>
                    <div className={`p-2 rounded-full border group border-gray-300 hover:border-gray-800 ${plus ? 'border-gray-100' : 'border-gray-400'} `}>
                        <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className={`block h-3 w-3 group-hover:fill-gray-800 ${plus ? 'fill-gray-100' : 'fill-gray-400'} `}><path d="m6.75.75v4.5h4.5v1.5h-4.5v4.5h-1.5v-4.5h-4.5v-1.5h4.5v-4.5z"></path></svg>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default GuestSelector;
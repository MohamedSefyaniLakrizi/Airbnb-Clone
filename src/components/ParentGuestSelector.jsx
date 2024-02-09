import GuestSelector from './GuestSelector';

function ParentGuestSelector({ onAdultChange, onChildrenChange, onInfantsChange, onPetsChange, disablePlus, noAdult}){

    return(
        <>
        <GuestSelector text="Adults" subtext="Ages 13 or above" onAdultChange={onAdultChange} disablePlus={disablePlus} noAdult={noAdult} />
        <GuestSelector text="Children" subtext="Ages 2-12" onChildrenChange={onChildrenChange} disablePlus={disablePlus} />
        <GuestSelector text="Infants" subtext="Under 2" onInfantsChange={onInfantsChange}/>
        <GuestSelector text="Pets" subtext="Bringing a service animal?" onPetsChange={onPetsChange}/>
        </>
    )
}

export default ParentGuestSelector;
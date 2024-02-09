import React, { useState, useEffect } from "react";
import "../styles/StayType.css";

function StayTypeChild({ image, image_name, clickedStayType, onClick }) {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (clickedStayType === image_name) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  }, [clickedStayType, image_name]);

  return (
    <div
      onClick={onClick}
      className={`flex flex-col select-none items-center justify-center h-full gap-2 opacity-60 min-w-[55px] flex-shrink-0 border-b-2 border-transparent hover:border-b-gray-400 hover:opacity-100 transition-all duration-200
        ${clicked ? "clickedStayType" : ""}
        `}
    >
      <img src={image} alt={image_name} className="w-6 h-6" />
      <p className="text-xs text-nowrap w-max select-none">{image_name}</p>
    </div>
  );
}

export default StayTypeChild;

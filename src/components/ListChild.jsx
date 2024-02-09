import React, { useEffect, useState } from "react";

function ListChild({ name, selected, onClick }) {
  const [highlighted, setHighlighted] = useState(false);
  useEffect(() => {
    if (name === selected) {
      setHighlighted(true);
    } else {
      setHighlighted(false);
    }
    console.log(selected + " " + name);
  }, [selected, name]);
  return (
    <button
      className={`border-b-2 font-medium h-full flex items-center text-sm text-nowrap 
      ${highlighted ? "border-black opacity-100" : "opacity-60"}
      `}
      onClick={onClick}
    >
      <p>{name}</p>
    </button>
  );
}

export default ListChild;

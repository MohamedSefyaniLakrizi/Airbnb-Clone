import { useRef, useState, useEffect } from "react";
import "../styles/StayType.css";
import amazing_pools from "../assets/icon_stay_type/amazing_pools.jpg";
import amazing_view from "../assets/icon_stay_type/amazing_view.jpg";
import beach_front from "../assets/icon_stay_type/beach_front.jpg";
import cabins from "../assets/icon_stay_type/cabins.jpg";
import earth_homes from "../assets/icon_stay_type/earth_homes.jpg";
import farms from "../assets/icon_stay_type/farms.jpg";
import iconic_cities from "../assets/icon_stay_type/iconic_cities.jpg";
import islands from "../assets/icon_stay_type/islands.jpg";
import lake from "../assets/icon_stay_type/lake.jpg";
import mansions from "../assets/icon_stay_type/mansions.jpg";
import national_park from "../assets/icon_stay_type/national_park.jpg";
import OMG from "../assets/icon_stay_type/OMG.jpg";
import riads from "../assets/icon_stay_type/riads.jpg";
import room from "../assets/icon_stay_type/room.jpg";
import surfing from "../assets/icon_stay_type/surfing.jpg";
import tiny_homes from "../assets/icon_stay_type/tiny_homes.jpg";
import trending from "../assets/icon_stay_type/trending.jpg";
import StayTypeChild from "./StayTypeChild";

function StayType() {
  const [clickedStayType, setClickedStayType] = useState("National parks");
  const [isAtExtremeRight, setIsAtExtremeRight] = useState(false);
  const [isAtExtremeLeft, setIsAtExtremeLeft] = useState(false);
  const [startTouch, setStartTouch] = useState(null);
  const carousel = useRef();
  const leftArrow = useRef();
  const rightArrow = useRef();

  const handleClick = (name) => {
    setClickedStayType(name);
  };

  const goRight = () => {
    carousel.current.scrollTo({
      left: carousel.current.scrollLeft - carousel.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const goLeft = () => {
    carousel.current.scrollTo({
      left: carousel.current.scrollLeft + carousel.current.offsetWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const checkIfAtExtremeRight = () => {
      setIsAtExtremeRight(
        carousel.current.scrollLeft >=
          carousel.current.scrollWidth - carousel.current.offsetWidth
      );
    };
    const checkIfAtExtremeLeft = () => {
      setIsAtExtremeLeft(carousel.current.scrollLeft === 0);
    };

    checkIfAtExtremeLeft();
    checkIfAtExtremeRight();
    carousel.current.addEventListener("scroll", checkIfAtExtremeRight);
    carousel.current.addEventListener("scroll", checkIfAtExtremeLeft);
    return () => {
      carousel.current.removeEventListener("scroll", checkIfAtExtremeRight);
      carousel.current.removeEventListener("scroll", checkIfAtExtremeLeft);
    };
  }, []);

  const handleTouchStart = (e) => {
    setStartTouch(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (startTouch) {
      const currentTouch = e.touches[0].clientX;
      const diffTouch = startTouch - currentTouch;

      // Calculate the new scroll position
      const scrollPos = carousel.current.scrollLeft + diffTouch;

      carousel.current.scrollTo({
        left: scrollPos,
        behavior: "auto",
      });

      // Update the start touch position
      setStartTouch(currentTouch);
    }
  };

  const handleTouchEnd = () => {
    setStartTouch(null);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`hidden md:flex absolute left-0 top-0 bottom-0 h-full w-13 flex-row-reverse z-50 overflow-visible
        ${isAtExtremeLeft ? "md:hidden" : ""}
        `}
      >
        <div className="w-10 h-full bg-gradient-to-r from-white via-30% via-slate-50 to-transparent" />
        <div className="w-8 h-full bg-white flex flex-col justify-center items-center overflow-visible">
          <div
            onClick={goRight}
            useRef={leftArrow}
            className="flex flex-col align-middle justify-center rounded-full p-[7px] w-[28px] cursor-pointer border border-gray-400 shadow-black hover:shadow-2xl hover:scale-105 transition-all duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="block h-3 w-3 stroke-[5.33333] stroke-black"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path>
            </svg>
          </div>
        </div>
      </div>
      <div
        ref={carousel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="flex flex-row relative items-center gap-8 overflow-hidden h-[78px]"
      >
        <StayTypeChild
          image={national_park}
          image_name="National parks"
          onClick={() => handleClick("National parks")}
          clickedStayType={clickedStayType}
        />
        <StayTypeChild
          image={beach_front}
          image_name="Beach front"
          onClick={() => handleClick("Beach front")}
          clickedStayType={clickedStayType}
        />
        <StayTypeChild
          image={iconic_cities}
          image_name="Iconic cities"
          onClick={() => handleClick("Iconic cities")}
          clickedStayType={clickedStayType}
        />
        <StayTypeChild
          image={trending}
          image_name="Trending"
          onClick={() => handleClick("Trending")}
          clickedStayType={clickedStayType}
        />
        <StayTypeChild
          image={lake}
          image_name="Lake"
          onClick={() => handleClick("Lake")}
          clickedStayType={clickedStayType}
        />
        <StayTypeChild
          image={mansions}
          image_name="Mansions"
          onClick={() => handleClick("Mansions")}
          clickedStayType={clickedStayType}
        />
        <StayTypeChild
          image={cabins}
          image_name="Cabins"
          onClick={() => handleClick("Cabins")}
          clickedStayType={clickedStayType}
        />
        <StayTypeChild
          image={riads}
          image_name="Riads"
          onClick={() => handleClick("Riads")}
          clickedStayType={clickedStayType}
        />
        <StayTypeChild
          image={room}
          image_name="Rooms"
          onClick={() => handleClick("Rooms")}
          clickedStayType={clickedStayType}
        />
        <StayTypeChild
          image={islands}
          image_name="Islands"
          onClick={() => handleClick("Islands")}
          clickedStayType={clickedStayType}
        />
        <StayTypeChild
          image={amazing_view}
          image_name="Amazing view"
          onClick={() => handleClick("Amazing view")}
          clickedStayType={clickedStayType}
        />
        <StayTypeChild
          image={amazing_pools}
          image_name="Amazing pools"
          onClick={() => handleClick("Amazing pools")}
          clickedStayType={clickedStayType}
        />
        <StayTypeChild
          image={farms}
          image_name="Farms"
          onClick={() => handleClick("Farms")}
          clickedStayType={clickedStayType}
        />
        <StayTypeChild
          image={OMG}
          image_name="OMG"
          onClick={() => handleClick("OMG")}
          clickedStayType={clickedStayType}
        />
        <StayTypeChild
          image={surfing}
          image_name="Surfing"
          onClick={() => handleClick("Surfing")}
          clickedStayType={clickedStayType}
        />
        <StayTypeChild
          image={tiny_homes}
          image_name="Tiny homes"
          onClick={() => handleClick("Tiny homes")}
          clickedStayType={clickedStayType}
        />
        <StayTypeChild
          image={earth_homes}
          image_name="Earth homes"
          onClick={() => handleClick("Earth homes")}
          clickedStayType={clickedStayType}
        />
      </div>
      <div
        className={`hidden md:flex absolute right-0 top-0 bottom-0 h-full w-13 overflow-visible
        ${isAtExtremeRight ? "md:hidden" : ""}
        `}
      >
        <div className="w-10 h-full bg-gradient-to-l from-white via-30% via-slate-50 to-transparent" />
        <div className="w-8 h-full bg-white flex flex-col justify-center items-center overflow-visible">
          <div
            onClick={goLeft}
            useRef={rightArrow}
            className={`flex flex-col align-middle justify-center rounded-full p-[7px] w-[28px] cursor-pointer border border-gray-400 shadow-black hover:shadow-2xl hover:scale-105 transition-all duration-200`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="block fill-none h-3 w-3 stroke-black stroke-[5.33333] overflow-visible"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path
                fill="none"
                d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StayType;

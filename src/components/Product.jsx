import React, { useState, useRef, useEffect } from "react";
import "../output.css";
import "../styles/product.css";

function Product({
  image,
  image2,
  image3,
  image4,
  image5,
  image6,
  location,
  distance,
  date,
  rating,
  price,
}) {
  const rightArrow = useRef();
  const leftArrow = useRef();
  const [isAtExtremeLeft, setIsAtExtremeLeft] = useState(false);
  const [isAtExtremeRight, setIsAtExtremeRight] = useState(false);
  const images = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [scrollCount, setScrollCount] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollVisual = useRef();
  const [startTouch, setStartTouch] = useState(null);

  const handleTouchStart = (e) => {
    setStartTouch(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isScrolling && startTouch) {
      setIsScrolling(true);
      const currentTouch = e.touches[0].clientX;
      const diffTouch = startTouch - currentTouch;

      // Determine the direction of the swipe
      const direction = diffTouch > 0 ? 1 : -1;

      // Calculate the index of the next item
      const nextIndex = Math.min(
        Math.max(0, scrollCount + direction),
        images.current.children.length - 1
      );

      // Calculate the scroll position of the next item
      const scrollPos = images.current.children[nextIndex].offsetLeft;

      images.current.scrollTo({
        left: scrollPos,
        behavior: "smooth",
      });

      // Update scrollCount
      setScrollCount(scrollCount + direction);
    }
  };

  const handleTouchEnd = () => {
    setIsScrolling(false);
    setStartTouch(null);
  };

  const handleHovered = (value) => {
    setIsHovered(value);
  };

  const rightArrowClick = (event) => {
    event.preventDefault();
    if (!isScrolling) {
      setIsScrolling(true);
      images.current.scrollTo({
        left: images.current.scrollLeft + images.current.offsetWidth,
        behavior: "smooth",
      });
      setScrollCount(scrollCount + 1);
      if (scrollCount === 2) {
        scrollVisual.current.scrollTo({
          left:
            scrollVisual.current.scrollLeft + scrollVisual.current.offsetWidth,
          behavior: "smooth",
        });
      }
      setTimeout(() => setIsScrolling(false), 300);
      console.log(scrollCount);
    }
  };
  const leftArrowClick = (event) => {
    event.preventDefault();
    if (!isScrolling) {
      setIsScrolling(true);
      images.current.scrollTo({
        left: images.current.scrollLeft - images.current.offsetWidth,
        behavior: "smooth",
      });
      setScrollCount(scrollCount - 1);
      if (scrollCount === 3) {
        scrollVisual.current.scrollTo({
          left:
            scrollVisual.current.scrollLeft - scrollVisual.current.offsetWidth,
          behavior: "smooth",
        });
      }
      setTimeout(() => setIsScrolling(false), 300);
      console.log(scrollCount);
    }
  };

  useEffect(() => {
    const checkIfAtExtremeRight = () => {
      setIsAtExtremeRight(
        images.current.scrollLeft >=
          images.current.scrollWidth - images.current.offsetWidth
      );
    };
    const checkIfAtExtremeLeft = () => {
      setIsAtExtremeLeft(images.current.scrollLeft === 0);
    };

    checkIfAtExtremeLeft();
    checkIfAtExtremeRight();
    images.current.addEventListener("scroll", checkIfAtExtremeRight);
    images.current.addEventListener("scroll", checkIfAtExtremeLeft);
    return () => {
      images.current.removeEventListener("scroll", checkIfAtExtremeRight);
      images.current.removeEventListener("scroll", checkIfAtExtremeLeft);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <a href="/">
        <div
          className="relative"
          onMouseEnter={() => handleHovered(true)}
          onMouseLeave={() => handleHovered(false)}
        >
          <div
            className="overflow-hidden relative flex aspect-[20/19] rounded-xl group"
            ref={images}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={image}
              alt="product"
              className=" object-cover aspect-[20/19]"
            />
            <img
              src={image2}
              alt="product"
              className=" object-cover aspect-[20/19]"
            />
            <img
              src={image3}
              alt="product"
              className=" object-cover aspect-[20/19]"
            />
            <img
              src={image4}
              alt="product"
              className=" object-cover aspect-[20/19]"
            />
            <img
              src={image5}
              alt="product"
              className=" object-cover aspect-[20/19]"
            />
            <img
              src={image6}
              alt="product"
              className=" object-cover aspect-[20/19]"
            />
          </div>
          {rating > 4.9 ? (
            <div className="absolute left-4 top-4 text-sm bg-gradient px-3 py-1 rounded-2xl shadow-lg">
              Guest Favorite
            </div>
          ) : (
            ""
          )}
          <div
            onClick={rightArrowClick}
            ref={rightArrow}
            className={`absolute z-20 right-4 p-2 rounded-full bg-slate-100 top-1/2 transform transition-opacity duration-300  -translate-y-[50%] ${
              isHovered ? "opacity-90" : "opacity-0"
            } ${isAtExtremeRight ? "hidden" : ""} `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="block fill-none w-3 h-3 stroke-[4] stroke-black"
            >
              <path
                fill="none"
                d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"
              ></path>
            </svg>
          </div>
          <div
            onClick={leftArrowClick}
            ref={leftArrow}
            className={`absolute z-20 left-4 p-2 rounded-full bg-slate-100 top-1/2 transform transition-opacity duration-300  -translate-y-[50%] ${
              isHovered ? "opacity-90" : "opacity-0"
            } ${isAtExtremeLeft ? "hidden" : ""} `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="block fill-none w-3 h-3 stroke-[4] stroke-black"
            >
              <path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path>
            </svg>
          </div>
          <div className="absolute right-4 top-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="block stroke-2 h-6 w-6 stroke-white fill-svg-heart"
            >
              <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
            </svg>
          </div>
          <div
            ref={scrollVisual}
            className="absolute left-1/2 transform -translate-x-1/2 bottom-2 h-[18px] flex gap-2 items-center overflow-hidden w-[52px]"
          >
            <div className="flex gap-[6px] items-center h-3">
              <div
                className={`flex items-center rounded-full bg-white transition-opacity delay-300 h-[6px] w-[6px]
              ${scrollCount === 0 ? "opacity-100" : "opacity-50"}
              `}
              ></div>
              <div
                className={`rounded-full flex items-center bg-white transition-opacity delay-300
              ${scrollCount >= 0 && scrollCount < 3 ? "h-[6px] w-[6px]" : ""}
              ${
                scrollCount === 1 ? "opacity-100 h-[6px] w-[6px]" : "opacity-50"
              }
              ${scrollCount > 2 ? "h-[4px] w-[4px]" : ""}
              `}
              ></div>
              <div
                className={`rounded-full bg-white transition-opacity delay-300 flex items-center
                ${scrollCount === 0 ? "h-[6px] w-[6px]" : ""}
                ${
                  scrollCount === 2
                    ? "opacity-100 h-[6px] w-[6px]"
                    : "opacity-50"
                }
                ${scrollCount >= 3 ? "h-[5px] w-[5px]" : "h-[6px] w-[6px]"}
                `}
              ></div>
              <div
                className={`rounded-full bg-white transition-opacity delay-300 flex items-center
                ${
                  scrollCount >= 0 && scrollCount < 3
                    ? "h-[5px] w-[5px]"
                    : "h-[6px] w-[6px]"
                }
                ${
                  scrollCount === 3
                    ? "opacity-100 h-[6px] w-[6px]"
                    : "opacity-50"
                }
                ${scrollCount >= 4 ? "h-[6px] w-[6px]" : ""}
                `}
              ></div>
              <div
                className={`rounded-full bg-white transition-opacity delay-300 flex items-center
                ${
                  scrollCount >= 0 && scrollCount < 3
                    ? "h-[4px] w-[4px]"
                    : "h-[6px] w-[6px]"
                }
                ${scrollCount === 4 ? "opacity-100" : "opacity-50"} 
                `}
              ></div>
              <div
                className={`rounded-full h-[6px] w-[6px] bg-white transition-opacity delay-300 flex items-center
              ${scrollCount === 5 ? "opacity-100" : "opacity-50"} 
              `}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex justify-between pt-3 items-center">
          <h3 className="text-[15px] font-medium">{location}</h3>
          <p className="font-light flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="block h-3 w-3 fill-black"
            >
              <path
                fill-rule="evenodd"
                d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
              ></path>
            </svg>
            {rating === 5 ? "5.0" : rating}
          </p>
        </div>
        <p className="text-[15px] font-light opacity-65">{distance}</p>
        <p className="text-[15px] font-light opacity-70">{date}</p>
        <p className="text-[15px] font-medium">
          MAD{price.toLocaleString()} <span className="font-light">night</span>
        </p>
      </a>
    </div>
  );
}

export default Product;

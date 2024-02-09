import React, { useEffect, useState, useRef } from "react";
import ListChild from "./ListChild";
import "../styles/Footer.css";

function Footer() {
  const [selected, setSelected] = useState("Popular");
  const [isAtExtremeRight, setIsAtExtremeRight] = useState(false);
  const [isAtExtremeLeft, setIsAtExtremeLeft] = useState(false);
  const [startTouch, setStartTouch] = useState(null);
  const [numItems, setNumItems] = useState(getNumItems(window.innerWidth));
  const list = useRef();

  const handleClickFooter = (name) => {
    setSelected(name);
  };

  function getNumItems(width) {
    if (width <= 640) {
      return 7;
    } else if (width <= 1128) {
      return 11;
    } else {
      return places.length;
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setNumItems(getNumItems(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const checkIfAtExtremeRight = () => {
      setIsAtExtremeRight(
        list.current.scrollLeft >=
          list.current.scrollWidth - list.current.offsetWidth
      );
      console.log(isAtExtremeRight);
    };
    const checkIfAtExtremeLeft = () => {
      setIsAtExtremeLeft(list.current.scrollLeft === 0);
      console.log(isAtExtremeLeft);
    };

    checkIfAtExtremeLeft();
    checkIfAtExtremeRight();
    list.current.addEventListener("scroll", checkIfAtExtremeRight);
    list.current.addEventListener("scroll", checkIfAtExtremeLeft);
    return () => {
      list.current.removeEventListener("scroll", checkIfAtExtremeRight);
      list.current.removeEventListener("scroll", checkIfAtExtremeLeft);
    };
  }, []);

  const goRight = () => {
    list.current.scrollTo({
      left: list.current.scrollLeft - list.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const goLeft = () => {
    list.current.scrollTo({
      left: list.current.scrollLeft + list.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const handleTouchStart = (e) => {
    setStartTouch(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (startTouch) {
      const currentTouch = e.touches[0].clientX;
      const diffTouch = startTouch - currentTouch;

      // Calculate the new scroll position
      const scrollPos = list.current.scrollLeft + diffTouch;

      list.current.scrollTo({
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
    <footer className="bg-[#f7f7f7] w-full">
      <div className=" 3xl:items-center flex flex-col">
        <div className="flex flex-col w-full gap-2 p-5 md:p-10 lg:p-20 3xl:p-0 3xl:py-10 3xl:w-[60vw]">
          <h1 className="text-xl font-medium">
            Inspiration for future gateways
          </h1>
          <div className="relative">
            <div
              className={`absolute left-0 top-0 bottom-0 h-full w-13 flex flex-row-reverse z-10 overflow-visible
                ${isAtExtremeLeft ? "hidden" : ""}
                `}
            >
              <div className="w-10 h-full gradient-left" />
              <div className="w-8 h-full bg-[#f7f7f7] flex flex-col justify-center items-center overflow-visible">
                <div
                  onClick={goRight}
                  className="flex flex-col align-middle justify-center p-[7px] w-[28px] cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-label="scroll tabs backward"
                    role="img"
                    focusable="false"
                    className="block h-4 w-4 stroke-black stroke-[3]"
                  >
                    <path
                      fill="none"
                      d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="relative w-full border-b border-gray-300 h-[50px] flex items-center gap-6 overflow-hidden"
              ref={list}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <ListChild
                name="Popular"
                onClick={() => handleClickFooter("Popular")}
                selected={selected}
              />
              <ListChild
                name="Arts & culture"
                onClick={() => handleClickFooter("Arts & culture")}
                selected={selected}
              />
              <ListChild
                name="Outdoors"
                onClick={() => handleClickFooter("Outdoors")}
                selected={selected}
              />
              <ListChild
                name="Mountains"
                onClick={() => handleClickFooter("Mountains")}
                selected={selected}
              />
              <ListChild
                name="Beach"
                onClick={() => handleClickFooter("Beach")}
                selected={selected}
              />
              <ListChild
                name="Unique stays"
                onClick={() => handleClickFooter("Unique stays")}
                selected={selected}
              />
              <ListChild
                name="Categories"
                onClick={() => handleClickFooter("Categories")}
                selected={selected}
              />
              <ListChild
                name="Things to do"
                onClick={() => handleClickFooter("Things to do")}
                selected={selected}
              />
              <ListChild
                name="Airbnb-friendly appartments"
                onClick={() => handleClickFooter("Airbnb-friendly appartments")}
                selected={selected}
              />
            </div>
            <div
              className={`absolute right-0 top-0 bottom-0 h-full w-13 flex overflow-visible
                 ${isAtExtremeRight ? "hidden" : ""}
                `}
            >
              <div className="w-10 h-full gradient-right" />
              <div className="w-8 h-full bg-[#f7f7f7] flex flex-col justify-center items-center overflow-visible">
                <div
                  onClick={goLeft}
                  className={`flex flex-col align-middle justify-center p-[7px] w-[28px] cursor-pointer shadow-black hover:shadow-2xl hover:scale-105 transition-all duration-200`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-label="scroll tabs forward"
                    role="img"
                    focusable="false"
                    className="block h-4 w-4 stroke-black stroke-[3]"
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
          <div className="grid py-5 grid-cols-2 2md:grid-cols-3 lg:grid-cols-6 gap-5">
            {places.slice(0, numItems).map((place) => (
              <div className="flex flex-col gap-[2px] text-sm cursor-pointer">
                <p>{place.name}</p>
                <p className="text-gray-500">{place.description}</p>
              </div>
            ))}
            <div className="flex items-start">
              <div className="flex items-center gap-1 text-sm hover:underline cursor-pointer">
                Show more{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                  role="presentation"
                  focusable="false"
                  className="block h-3 w-3 stroke-black stroke-[5.3333] fill-none"
                >
                  <path d="M28 12 16.7 23.3a1 1 0 0 1-1.4 0L4 12"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-300 h-[1px] w-full"></div>
        <div className="flex flex-col 2md:flex-row p-5 md:p-10 lg:p-20 pb-5 md:pb-5 3xl:px-0 3xl:w-[60vw] py-2 md:py-10">
          <div className="border-b border-gray-300 2md:border-b-0 py-5 flex flex-col gap-3 2md:w-1/3">
            <h3 className="text-sm">Support</h3>
            <ul className="flex flex-col gap-3 text-sm opacity-80">
              <li className="hover:underline cursor-pointer">Help Center</li>
              <li className="hover:underline cursor-pointer">AirCover</li>
              <li className="hover:underline cursor-pointer">
                Anti-discrimination
              </li>
              <li className="hover:underline cursor-pointer">
                Disability support
              </li>
              <li className="hover:underline cursor-pointer">
                Cancellation options
              </li>
              <li className="hover:underline cursor-pointer">
                Report neighborhood concern
              </li>
            </ul>
          </div>
          <div className="border-b border-gray-300 2md:border-b-0 py-5 flex flex-col gap-3 2md:w-1/3">
            <h3 className="text-sm">Hosting</h3>
            <ul className="flex flex-col gap-3 text-sm opacity-80">
              <li className="hover:underline cursor-pointer">
                Airbnb your home
              </li>
              <li className="hover:underline cursor-pointer">
                AirCover for hosts
              </li>
              <li className="hover:underline cursor-pointer">
                Hosting resources
              </li>
              <li className="hover:underline cursor-pointer">
                Community forum
              </li>
              <li className="hover:underline cursor-pointer">
                Hosting responsability
              </li>
              <li className="hover:underline cursor-pointer">
                Airbnb friendly appartments
              </li>
            </ul>
          </div>
          <div className="border-b border-gray-300 2md:border-b-0 py-5 flex flex-col gap-3 2md:w-1/3">
            <h3 className="text-sm">Airbnb</h3>
            <ul className="flex flex-col gap-3 text-sm opacity-80">
              <li className="hover:underline cursor-pointer">Newsroom</li>
              <li className="hover:underline cursor-pointer">New features</li>
              <li className="hover:underline cursor-pointer">Careers</li>
              <li className="hover:underline cursor-pointer">Investors</li>
              <li className="hover:underline cursor-pointer">Gift cards</li>
              <li className="hover:underline cursor-pointer">
                Airbnb.org emergency stays
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center w-full pb-4 gap-5">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="block h-4 w-4 fill-black"
            >
              <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path>
            </svg>
            <button className="text-sm hover:underline">English (US)</button>
          </div>
          <div>
            <button className="text-sm hover:underline">MAD</button>
          </div>
          <div className="flex gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-label="Navigate to Facebook"
              role="img"
              focusable="false"
              className="block h-[18px] w-[18px] fill-black"
            >
              <path d="M30 0a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"></path>
              <path
                fill="#fff"
                d="M22.94 16H18.5v-3c0-1.27.62-2.5 2.6-2.5h2.02V6.56s-1.83-.31-3.58-.31c-3.65 0-6.04 2.21-6.04 6.22V16H9.44v4.62h4.06V32h5V20.62h3.73z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-label="Navigate to Twitter"
              role="img"
              focusable="false"
              className="block h-[18px] w-[18px] fill-black"
            >
              <path d="M32 4v24a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4z"></path>
              <path
                fill="#fff"
                d="M18.66 7.99a4.5 4.5 0 0 0-2.28 4.88A12.31 12.31 0 0 1 7.3 8.25a4.25 4.25 0 0 0 1.38 5.88c-.69 0-1.38-.13-2-.44a4.54 4.54 0 0 0 3.5 4.31 4.3 4.3 0 0 1-2 .06 4.64 4.64 0 0 0 4.19 3.13A8.33 8.33 0 0 1 5.8 23a12.44 12.44 0 0 0 19.32-11.19A7.72 7.72 0 0 0 27.3 9.5a8.3 8.3 0 0 1-2.5.75 4.7 4.7 0 0 0 2-2.5c-.87.5-1.81.87-2.81 1.06a4.5 4.5 0 0 0-5.34-.83z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-label="Navigate to Instagram"
              role="img"
              focusable="false"
              className="block h-[18px] w-[18px] fill-black"
            >
              <path d="M30 0H2a2 2 0 0 0-2 2v28c0 1.1.9 2 2 2h28a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"></path>
              <path
                fill="#fff"
                d="M15.71 4h1.25c2.4 0 2.85.02 3.99.07 1.28.06 2.15.26 2.91.56.79.3 1.46.72 2.13 1.38.6.6 1.08 1.33 1.38 2.13l.02.06c.28.74.48 1.58.54 2.8l.01.4c.05 1.02.06 1.63.06 4.4v.92c0 2.6-.02 3.05-.07 4.23a8.78 8.78 0 0 1-.56 2.91c-.3.8-.77 1.53-1.38 2.13a5.88 5.88 0 0 1-2.13 1.38l-.06.02c-.74.28-1.59.48-2.8.53l-.4.02c-1.02.05-1.63.06-4.4.06h-.92a73.1 73.1 0 0 1-4.23-.07 8.78 8.78 0 0 1-2.91-.56c-.8-.3-1.53-.77-2.13-1.38a5.88 5.88 0 0 1-1.38-2.13l-.02-.06a8.84 8.84 0 0 1-.54-2.8l-.01-.37A84.75 84.75 0 0 1 4 16.29v-1c0-2.62.02-3.06.07-4.24.06-1.26.26-2.13.55-2.88l.01-.03c.3-.8.77-1.53 1.38-2.13a5.88 5.88 0 0 1 2.13-1.38l.06-.02a8.84 8.84 0 0 1 2.8-.54l.37-.01C12.39 4 12.99 4 15.71 4zm.91 2.16h-1.24c-2.3 0-2.91.01-3.81.05l-.42.02c-1.17.05-1.8.25-2.23.41-.56.22-.96.48-1.38.9-.4.41-.67.8-.88 1.35l-.03.06a6.7 6.7 0 0 0-.4 2.2l-.02.45c-.04.9-.05 1.53-.05 3.94v1.08c0 2.64.02 3.05.07 4.23v.07c.06 1.13.25 1.74.42 2.16.21.56.47.96.9 1.38.4.4.8.67 1.34.88l.06.03a6.7 6.7 0 0 0 2.2.4l.45.02c.9.04 1.53.05 3.94.05h1.08c2.64 0 3.05-.02 4.23-.07h.07a6.51 6.51 0 0 0 2.16-.42c.52-.19.99-.5 1.38-.9.4-.4.67-.8.88-1.34l.03-.06a6.7 6.7 0 0 0 .4-2.2l.02-.45c.04-.9.05-1.53.05-3.94v-1.09c0-2.63-.02-3.04-.07-4.22v-.07a6.51 6.51 0 0 0-.42-2.16c-.19-.52-.5-.99-.9-1.38a3.7 3.7 0 0 0-1.34-.88l-.06-.03a6.63 6.63 0 0 0-2.16-.4l-.46-.02c-.9-.04-1.5-.05-3.8-.05zM16 9.84a6.16 6.16 0 1 1 0 12.32 6.16 6.16 0 0 1 0-12.32zM16 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm6.4-3.85a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center pb-10">
          <p className="text-sm opacity-80">© 2024 Airbnb, Inc.</p>
          <div className="flex gap-2 text-sm opacity-80">
            <button className="hover:underline">Terms</button>
            <p>.</p>
            <button className="hover:underline">Sitemap</button>
            <p>.</p>
            <button className="hover:underline">Privacy</button>
            <p>.</p>
            <button className="flex items-center gap-2 hover:underline">
              Your Privacy Choices
              <svg width="26" height="12" fill="none">
                <rect
                  x="0.5"
                  y="0.5"
                  width="25"
                  height="11"
                  rx="5.5"
                  fill="#fff"
                ></rect>
                <path d="M14 1h7a5 5 0 010 10H11l3-10z" fill="#06F"></path>
                <path
                  d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5"
                  stroke="#06F"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5"
                  stroke="#fff"
                  stroke-linecap="round"
                ></path>
                <rect
                  x="0.5"
                  y="0.5"
                  width="25"
                  height="11"
                  rx="5.5"
                  stroke="#06F"
                ></rect>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

const places = [
  {
    name: "Canmore",
    description: "Apartments rentals",
  },
  {
    name: "Benalmàdena",
    description: "Vacation rentals",
  },
  {
    name: "Marbella",
    description: "Beachfront rentals",
  },
  {
    name: "Mijas",
    description: "House rentals",
  },
  {
    name: "Prescott",
    description: "Cottage rentals",
  },
  {
    name: "Scottdale",
    description: "Condo rentals",
  },
  {
    name: "Tucson",
    description: "House rentals",
  },
  {
    name: "Jasper",
    description: "Cabin rentals",
  },
  {
    name: "Mountain View",
    description: "Vacation rentals",
  },
  {
    name: "Devonport",
    description: "Vacation rentals",
  },
  {
    name: "Mallacoota",
    description: "Beach house rentals",
  },
  {
    name: "Ibiza",
    description: "Appartment rentals",
  },
  {
    name: "Anaheim",
    description: "House rentals",
  },
  {
    name: "Monterey",
    description: "Vacation rentals",
  },
  {
    name: "Paso Robles",
    description: "Vacation rentals",
  },
  {
    name: "Santa Barbara",
    description: "House rentals",
  },
  {
    name: "Sonoma",
    description: "House rentals",
  },
];

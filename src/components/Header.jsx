import { useState, useRef, useEffect } from "react";
import "../styles/header.css";
import Region from "./Region";
import ParentGuestSelector from "./ParentGuestSelector";
import region_1 from "../assets/search-region-world.jpg";
import region_2 from "../assets/search-region-europe.webp";
import region_3 from "../assets/search-region-spain.webp";
import region_4 from "../assets/search-region-middle-east.webp";
import region_5 from "../assets/search-region-turkey.webp";
import region_6 from "../assets/search-region-south-east-asia.webp";

function Header() {
  const tripRef = useRef();
  const whereRef = useRef();
  const CheckInRef = useRef();
  const CheckOutRef = useRef();
  const WhoRef = useRef();
  const ProfileRef = useRef();
  const [selected, setSelected] = useState("Stays");
  const [inputValue, setInputValue] = useState("");
  const [stateExperiences, setStateExperiences] = useState(false);
  const [who, setWho] = useState(false);
  const [checkIn, setCheckIn] = useState(false);
  const [checkOut, setCheckOut] = useState(false);
  const [where, setWhere] = useState(false);
  const [searchExpended, setSearchExpended] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Call handleResize immediately to set initial state
    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClickWhere = (event) => {
    setSearchExpended(true);
    document.getElementById("trip_selector").classList.add("bg-[#EBEBEB]");
    document.getElementById("where").classList.remove("hover:bg-gray-200");
    if (!document.getElementById("where_clicked").contains(event.target)) {
      setWhere(true);
      document.getElementById("where_clicked").classList.remove("hidden");
    }
    setCheckOut(false);
  };

  const handleClickCheckIn = () => {
    document.getElementById("check_in_clicked").classList.remove("hidden");
    setSearchExpended(true);
    document.getElementById("trip_selector").classList.add("bg-[#EBEBEB]");
    setCheckIn(true);
    setWhere(false);
    setCheckOut(false);
  };

  const handleClickCheckOut = () => {
    document.getElementById("check_in_clicked").classList.remove("hidden");
    setSearchExpended(true);
    document.getElementById("trip_selector").classList.add("bg-[#EBEBEB]");
    setCheckOut(true);
    setWhere(false);
    setCheckIn(false);
  };

  const handleClickWho = () => {
    document.getElementById("where_clicked").classList.add("hidden");
    setSearchExpended(true);
    document.getElementById("trip_selector").classList.add("bg-[#EBEBEB]");
    setWho(true);
    setWhere(false);
    setCheckIn(false);
    setCheckOut(false);
  };

  const handleClick = (item) => {
    setSelected(item);
    if (item === "Stays") {
      setStateExperiences(false);
    } else if (item === "Experiences") {
      setStateExperiences(true);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (whereRef.current && !whereRef.current.contains(event.target)) {
        if (!document.getElementById("nav").contains(event.target)) {
          const input = document.getElementById("where_clicked");
          if (input) {
            input.classList.add("hidden");
            setWhere(false);
          }
        }
      }

      if (CheckInRef.current && !CheckInRef.current.contains(event.target)) {
        if (!document.getElementById("nav").contains(event.target)) {
          const input = document.getElementById("check_in_clicked");
          if (input) {
            input.classList.add("hidden");
            setCheckIn(false);
          }
        }
      }

      if (CheckOutRef.current && !CheckOutRef.current.contains(event.target)) {
        if (!document.getElementById("nav").contains(event.target)) {
          const input = document.getElementById("check_in_clicked");
          if (input) {
            input.classList.add("hidden");
            setCheckOut(false);
          }
        }
      }

      if (WhoRef.current && !WhoRef.current.contains(event.target)) {
        if (!document.getElementById("nav").contains(event.target)) {
          const input = document.getElementById("check_in_clicked");
          if (input) {
            setWho(false);
          }
        }
      }

      if (tripRef.current && !tripRef.current.contains(event.target)) {
        if (!document.getElementById("nav").contains(event.target)) {
          setSearchExpended(false);
          document
            .getElementById("trip_selector")
            .classList.remove("bg-[#EBEBEB]");
        }
      }

      if (ProfileRef.current && !ProfileRef.current.contains(event.target)) {
        setProfileDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document
      .getElementById("search_destination")
      .addEventListener("input", function () {
        if (this.value.trim() === "") {
          this.classList.remove("font-normal");
        }
      });
  }, []);

  const [totalGuests, setTotalGuests] = useState(0);
  const [totalAdults, setTotalAdults] = useState(0);
  const [totalChildren, setTotalChildren] = useState(0);
  const [totalInfants, setTotalInfants] = useState(0);
  const [totalPets, setTotalPets] = useState(0);
  const [disablePlus, setDisablePlus] = useState(false);
  const [noAdult, setNoAdult] = useState(false);

  const handleAdultChange = (change) => {
    setTotalAdults(totalAdults + change);
    console.log("total adults" + totalAdults);
    setTotalGuests(totalGuests + change);
    if (noAdult > 0) {
      setNoAdult(false);
    } else {
      setNoAdult(true);
    }
  };

  const handleChildrenChange = (change) => {
    if (change === 1 && totalAdults === 0) {
      setTotalAdults(1);
      setNoAdult(true);
    }
    setTotalChildren(totalChildren + change);
    setTotalGuests(totalGuests + change);
  };

  const handleInfantsChange = (change) => {
    if (change === 1 && totalAdults === 0) {
      setTotalAdults(1);
      setNoAdult(true);
    }
    setTotalInfants(totalInfants + change);
  };

  const handlePetsChange = (change) => {
    if (change === 1 && totalAdults === 0) {
      setTotalAdults(1);
      setNoAdult(true);
    }
    setTotalPets(totalPets + change);
  };

  useEffect(() => {
    setDisablePlus(totalGuests >= 15);
  }, [totalGuests, totalAdults, totalInfants, totalChildren, totalPets]);

  const [isManualScroll, setIsManualScroll] = useState(false);

  const handleProfile = () => {
    setProfileDropdown(!profileDropdown);
  };

  const handleExpand = () => {
    if (window.innerWidth > 768) {
      setIsManualScroll(true);
      setIsScrolled(false);
      setIsExpanded(true);
    }
  };
  const lastScrollY = useRef(0);

  const isManualScrollRef = useRef(isManualScroll);
  const manualScrollYRef = useRef(0);

  useEffect(() => {
    isManualScrollRef.current = isManualScroll;
    if (isManualScroll) {
      manualScrollYRef.current = window.scrollY;
    }
  }, [isManualScroll]);

  useEffect(() => {
    const handleScroll = () => {
      let ScrollY = window.scrollY;
      if (ScrollY === 0) {
        if (window.innerWidth > 768) {
          setIsScrolled(false);
          setIsExpanded(false);
        }
      } else if (
        !isManualScrollRef.current &&
        Math.abs(ScrollY - lastScrollY.current) > 50
      ) {
        setIsScrolled(true);
        lastScrollY.current = ScrollY;
        if (!isManualScrollRef.current) {
          setIsExpanded(false);
        }
      }

      if (
        isManualScrollRef.current &&
        Math.abs(ScrollY - manualScrollYRef.current) > 50
      ) {
        setIsManualScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isExpanded]); // Removed isManualScroll from the dependency array

  return (
    <>
      {isExpanded && (
        <div className="fixed z-20 inset-0 bg-black opacity-30"></div>
      )}
      <div className="hidden xl:flex bg-[#f7f7f7] h-[64px] shadow-inner justify-center items-center">
        <a href="/" className=" font-medium text-[15px] underline">
          Learn about Guest Favorites, the most loved homes on Airbnb
        </a>
      </div>
      <header
        className={`sticky z-30 top-0 md:border md:border-gray-200 px-1 xs:px-5 gap-2 md:gap-0 md:px-10 xl:px-20 flex bg-white justify-start lg:justify-between ${
          isExpanded ? "shadow-xl" : ""
        } ${isScrolled ? "h-[80px]" : "min-h-[242px] 2md:min-h-[80px]"} `}
      >
        <div className="h-[80px] items-center flex">
          <a href="/">
            <div className="hidden xl:block">
              <svg
                width="102"
                height="32"
                className="block"
                fill="rgb(255, 56, 92)"
              >
                <path
                  d="M29.3864 22.7101C29.2429 22.3073 29.0752 21.9176 28.9157 21.5565C28.6701 21.0011 28.4129 20.4446 28.1641 19.9067L28.1444 19.864C25.9255 15.0589 23.5439 10.1881 21.0659 5.38701L20.9607 5.18316C20.7079 4.69289 20.4466 4.18596 20.1784 3.68786C19.8604 3.0575 19.4745 2.4636 19.0276 1.91668C18.5245 1.31651 17.8956 0.833822 17.1853 0.502654C16.475 0.171486 15.7005 -9.83959e-05 14.9165 4.23317e-08C14.1325 9.84805e-05 13.3581 0.171877 12.6478 0.503224C11.9376 0.834571 11.3088 1.31742 10.8059 1.91771C10.3595 2.46476 9.97383 3.05853 9.65572 3.68858C9.38521 4.19115 9.12145 4.70278 8.8664 5.19757L8.76872 5.38696C6.29061 10.1884 3.90903 15.0592 1.69015 19.8639L1.65782 19.9338C1.41334 20.463 1.16057 21.0102 0.919073 21.5563C0.75949 21.9171 0.592009 22.3065 0.448355 22.7103C0.0369063 23.8104 -0.094204 24.9953 0.0668098 26.1585C0.237562 27.334 0.713008 28.4447 1.44606 29.3804C2.17911 30.3161 3.14434 31.0444 4.24614 31.4932C5.07835 31.8299 5.96818 32.002 6.86616 32C7.14824 31.9999 7.43008 31.9835 7.71027 31.9509C8.846 31.8062 9.94136 31.4366 10.9321 30.8639C12.2317 30.1338 13.5152 29.0638 14.9173 27.5348C16.3194 29.0638 17.6029 30.1338 18.9025 30.8639C19.8932 31.4367 20.9886 31.8062 22.1243 31.9509C22.4045 31.9835 22.6864 31.9999 22.9685 32C23.8664 32.002 24.7561 31.8299 25.5883 31.4932C26.6901 31.0444 27.6554 30.3161 28.3885 29.3804C29.1216 28.4447 29.5971 27.3341 29.7679 26.1585C29.9287 24.9952 29.7976 23.8103 29.3864 22.7101ZM14.9173 24.377C13.1816 22.1769 12.0678 20.1338 11.677 18.421C11.5169 17.7792 11.4791 17.1131 11.5656 16.4573C11.6339 15.9766 11.8105 15.5176 12.0821 15.1148C12.4163 14.6814 12.8458 14.3304 13.3374 14.0889C13.829 13.8475 14.3696 13.7219 14.9175 13.7219C15.4655 13.722 16.006 13.8476 16.4976 14.0892C16.9892 14.3307 17.4186 14.6817 17.7528 15.1151C18.0244 15.5181 18.201 15.9771 18.2693 16.4579C18.3556 17.114 18.3177 17.7803 18.1573 18.4223C17.7661 20.1349 16.6526 22.1774 14.9173 24.377ZM27.7406 25.8689C27.6212 26.6908 27.2887 27.4674 26.7762 28.1216C26.2636 28.7759 25.5887 29.2852 24.8183 29.599C24.0393 29.9111 23.1939 30.0217 22.3607 29.9205C21.4946 29.8089 20.6599 29.5239 19.9069 29.0824C18.7501 28.4325 17.5791 27.4348 16.2614 25.9712C18.3591 23.3846 19.669 21.0005 20.154 18.877C20.3723 17.984 20.4196 17.0579 20.2935 16.1475C20.1791 15.3632 19.8879 14.615 19.4419 13.9593C18.9194 13.2519 18.2378 12.6768 17.452 12.2805C16.6661 11.8842 15.798 11.6777 14.9175 11.6777C14.0371 11.6777 13.1689 11.8841 12.383 12.2803C11.5971 12.6765 10.9155 13.2515 10.393 13.9589C9.94707 14.6144 9.65591 15.3624 9.5414 16.1465C9.41524 17.0566 9.4623 17.9822 9.68011 18.8749C10.1648 20.9993 11.4748 23.384 13.5732 25.9714C12.2555 27.4348 11.0845 28.4325 9.92769 29.0825C9.17468 29.5239 8.34007 29.809 7.47395 29.9205C6.64065 30.0217 5.79525 29.9111 5.0162 29.599C4.24581 29.2852 3.57092 28.7759 3.05838 28.1217C2.54585 27.4674 2.21345 26.6908 2.09411 25.8689C1.97932 25.0334 2.07701 24.1825 2.37818 23.3946C2.49266 23.0728 2.62663 22.757 2.7926 22.3818C3.0274 21.851 3.27657 21.3115 3.51759 20.7898L3.54996 20.7197C5.75643 15.9419 8.12481 11.0982 10.5894 6.32294L10.6875 6.13283C10.9384 5.64601 11.1979 5.14267 11.4597 4.6563C11.7101 4.15501 12.0132 3.68171 12.3639 3.2444C12.6746 2.86903 13.0646 2.56681 13.5059 2.35934C13.9473 2.15186 14.4291 2.04426 14.9169 2.04422C15.4047 2.04418 15.8866 2.15171 16.3279 2.35911C16.7693 2.56651 17.1593 2.86867 17.4701 3.24399C17.821 3.68097 18.1242 4.15411 18.3744 4.65538C18.6338 5.13742 18.891 5.63623 19.1398 6.11858L19.2452 6.32315C21.7097 11.0979 24.078 15.9415 26.2847 20.7201L26.3046 20.7631C26.5498 21.2936 26.8033 21.8419 27.042 22.382C27.2082 22.7577 27.3424 23.0738 27.4566 23.3944C27.7576 24.1824 27.8553 25.0333 27.7406 25.8689Z"
                  fill="rgb(255, 56, 92)"
                ></path>
                <path
                  d="M41.6847 24.1196C40.8856 24.1196 40.1505 23.9594 39.4792 23.6391C38.808 23.3188 38.2327 22.8703 37.7212 22.2937C37.2098 21.7172 36.8263 21.0445 36.5386 20.3078C36.2509 19.539 36.123 18.7062 36.123 17.8093C36.123 16.9124 36.2829 16.0475 36.5705 15.2787C36.8582 14.51 37.2737 13.8373 37.7852 13.2287C38.2966 12.6521 38.9039 12.1716 39.6071 11.8513C40.3103 11.531 41.0455 11.3708 41.8765 11.3708C42.6756 11.3708 43.3788 11.531 44.0181 11.8833C44.6574 12.2037 45.1688 12.6841 45.5843 13.2927L45.6802 11.7232H48.6209V23.7992H45.6802L45.5843 22.0375C45.1688 22.6781 44.6254 23.1906 43.9222 23.575C43.2829 23.9274 42.5158 24.1196 41.6847 24.1196ZM42.4519 21.2367C43.0272 21.2367 43.5386 21.0765 44.0181 20.7882C44.4656 20.4679 44.8172 20.0515 45.1049 19.539C45.3606 19.0265 45.4884 18.4179 45.4884 17.7452C45.4884 17.0725 45.3606 16.4639 45.1049 15.9514C44.8492 15.4389 44.4656 15.0225 44.0181 14.7022C43.5706 14.3818 43.0272 14.2537 42.4519 14.2537C41.8765 14.2537 41.3651 14.4139 40.8856 14.7022C40.4382 15.0225 40.0866 15.4389 39.7989 15.9514C39.5432 16.4639 39.4153 17.0725 39.4153 17.7452C39.4153 18.4179 39.5432 19.0265 39.7989 19.539C40.0546 20.0515 40.4382 20.4679 40.8856 20.7882C41.3651 21.0765 41.8765 21.2367 42.4519 21.2367ZM53.6392 8.4559C53.6392 8.80825 53.5753 9.12858 53.4154 9.38483C53.2556 9.64109 53.0319 9.86531 52.7442 10.0255C52.4565 10.1856 52.1369 10.2497 51.8173 10.2497C51.4976 10.2497 51.178 10.1856 50.8903 10.0255C50.6026 9.86531 50.3789 9.64109 50.2191 9.38483C50.0592 9.09654 49.9953 8.80825 49.9953 8.4559C49.9953 8.10355 50.0592 7.78323 50.2191 7.52697C50.3789 7.23868 50.6026 7.04649 50.8903 6.88633C51.178 6.72617 51.4976 6.66211 51.8173 6.66211C52.1369 6.66211 52.4565 6.72617 52.7442 6.88633C53.0319 7.04649 53.2556 7.27072 53.4154 7.52697C53.5433 7.78323 53.6392 8.07152 53.6392 8.4559ZM50.2191 23.7672V11.6911H53.4154V23.7672H50.2191V23.7672ZM61.9498 14.8623V14.8943C61.79 14.8303 61.5982 14.7982 61.4383 14.7662C61.2466 14.7342 61.0867 14.7342 60.895 14.7342C60 14.7342 59.3287 14.9904 58.8812 15.535C58.4018 16.0795 58.178 16.8483 58.178 17.8413V23.7672H54.9817V11.6911H57.9223L58.0182 13.517C58.3379 12.8763 58.7214 12.3958 59.2648 12.0435C59.7762 11.6911 60.3835 11.531 61.0867 11.531C61.3105 11.531 61.5342 11.563 61.726 11.595C61.8219 11.6271 61.8858 11.6271 61.9498 11.6591V14.8623ZM63.2283 23.7672V6.72617H66.4247V13.2287C66.8722 12.6521 67.3836 12.2036 68.0229 11.8513C68.6622 11.531 69.3654 11.3388 70.1645 11.3388C70.9635 11.3388 71.6987 11.4989 72.3699 11.8193C73.0412 12.1396 73.6165 12.588 74.128 13.1646C74.6394 13.7412 75.0229 14.4139 75.3106 15.1506C75.5983 15.9194 75.7261 16.7522 75.7261 17.6491C75.7261 18.546 75.5663 19.4109 75.2787 20.1796C74.991 20.9484 74.5755 21.6211 74.064 22.2297C73.5526 22.8063 72.9453 23.2867 72.2421 23.6071C71.5389 23.9274 70.8037 24.0875 69.9727 24.0875C69.1736 24.0875 68.4704 23.9274 67.8311 23.575C67.1918 23.2547 66.6804 22.7742 66.2649 22.1656L66.169 23.7352L63.2283 23.7672ZM69.3973 21.2367C69.9727 21.2367 70.4841 21.0765 70.9635 20.7882C71.411 20.4679 71.7626 20.0515 72.0503 19.539C72.306 19.0265 72.4339 18.4179 72.4339 17.7452C72.4339 17.0725 72.306 16.4639 72.0503 15.9514C71.7626 15.4389 71.411 15.0225 70.9635 14.7022C70.5161 14.3818 69.9727 14.2537 69.3973 14.2537C68.822 14.2537 68.3106 14.4139 67.8311 14.7022C67.3836 15.0225 67.032 15.4389 66.7443 15.9514C66.4886 16.4639 66.3608 17.0725 66.3608 17.7452C66.3608 18.4179 66.4886 19.0265 66.7443 19.539C67 20.0515 67.3836 20.4679 67.8311 20.7882C68.3106 21.0765 68.822 21.2367 69.3973 21.2367ZM76.9408 23.7672V11.6911H79.8814L79.9773 13.2607C80.3289 12.6841 80.8084 12.2357 81.4157 11.8833C82.023 11.531 82.7262 11.3708 83.5253 11.3708C84.4203 11.3708 85.1874 11.595 85.8267 12.0115C86.4979 12.4279 87.0094 13.0365 87.361 13.8053C87.7126 14.574 87.9043 15.5029 87.9043 16.56V23.7992H84.708V16.9764C84.708 16.1436 84.5162 15.4709 84.1326 14.9904C83.7491 14.51 83.2376 14.2537 82.5664 14.2537C82.0869 14.2537 81.6714 14.3498 81.2878 14.574C80.9362 14.7982 80.6486 15.0865 80.4248 15.503C80.2011 15.8873 80.1052 16.3678 80.1052 16.8483V23.7672H76.9408V23.7672ZM89.5025 23.7672V6.72617H92.6989V13.2287C93.1464 12.6521 93.6578 12.2036 94.2971 11.8513C94.9364 11.531 95.6396 11.3388 96.4387 11.3388C97.2378 11.3388 97.9729 11.4989 98.6442 11.8193C99.3154 12.1396 99.8907 12.588 100.402 13.1646C100.914 13.7412 101.297 14.4139 101.585 15.1506C101.873 15.9194 102 16.7522 102 17.6491C102 18.546 101.841 19.4109 101.553 20.1796C101.265 20.9484 100.85 21.6211 100.338 22.2297C99.8268 22.8063 99.2195 23.2867 98.5163 23.6071C97.8131 23.9274 97.0779 24.0875 96.2469 24.0875C95.4478 24.0875 94.7446 23.9274 94.1053 23.575C93.466 23.2547 92.9546 22.7742 92.5391 22.1656L92.4432 23.7352L89.5025 23.7672ZM95.7035 21.2367C96.2788 21.2367 96.7903 21.0765 97.2697 20.7882C97.7172 20.4679 98.0688 20.0515 98.3565 19.539C98.6122 19.0265 98.7401 18.4179 98.7401 17.7452C98.7401 17.0725 98.6122 16.4639 98.3565 15.9514C98.1008 15.4389 97.7172 15.0225 97.2697 14.7022C96.8222 14.3818 96.2788 14.2537 95.7035 14.2537C95.1281 14.2537 94.6167 14.4139 94.1373 14.7022C93.6898 15.0225 93.3382 15.4389 93.0505 15.9514C92.7628 16.4639 92.6669 17.0725 92.6669 17.7452C92.6669 18.4179 92.7948 19.0265 93.0505 19.539C93.3062 20.0515 93.6898 20.4679 94.1373 20.7882C94.6167 21.0765 95.0962 21.2367 95.7035 21.2367Z"
                  fill="rgb(255, 56, 92)"
                ></path>
              </svg>
            </div>
            <div className="hidden md:block xl:hidden">
              <svg width="30" height="32" className="block">
                <path
                  d="M29.3864 22.7101C29.2429 22.3073 29.0752 21.9176 28.9157 21.5565C28.6701 21.0011 28.4129 20.4446 28.1641 19.9067L28.1444 19.864C25.9255 15.0589 23.5439 10.1881 21.0659 5.38701L20.9607 5.18316C20.7079 4.69289 20.4466 4.18596 20.1784 3.68786C19.8604 3.0575 19.4745 2.4636 19.0276 1.91668C18.5245 1.31651 17.8956 0.833822 17.1853 0.502654C16.475 0.171486 15.7005 -9.83959e-05 14.9165 4.23317e-08C14.1325 9.84805e-05 13.3581 0.171877 12.6478 0.503224C11.9376 0.834571 11.3088 1.31742 10.8059 1.91771C10.3595 2.46476 9.97383 3.05853 9.65572 3.68858C9.38521 4.19115 9.12145 4.70278 8.8664 5.19757L8.76872 5.38696C6.29061 10.1884 3.90903 15.0592 1.69015 19.8639L1.65782 19.9338C1.41334 20.463 1.16057 21.0102 0.919073 21.5563C0.75949 21.9171 0.592009 22.3065 0.448355 22.7103C0.0369063 23.8104 -0.094204 24.9953 0.0668098 26.1585C0.237562 27.334 0.713008 28.4447 1.44606 29.3804C2.17911 30.3161 3.14434 31.0444 4.24614 31.4932C5.07835 31.8299 5.96818 32.002 6.86616 32C7.14824 31.9999 7.43008 31.9835 7.71027 31.9509C8.846 31.8062 9.94136 31.4366 10.9321 30.8639C12.2317 30.1338 13.5152 29.0638 14.9173 27.5348C16.3194 29.0638 17.6029 30.1338 18.9025 30.8639C19.8932 31.4367 20.9886 31.8062 22.1243 31.9509C22.4045 31.9835 22.6864 31.9999 22.9685 32C23.8664 32.002 24.7561 31.8299 25.5883 31.4932C26.6901 31.0444 27.6554 30.3161 28.3885 29.3804C29.1216 28.4447 29.5971 27.3341 29.7679 26.1585C29.9287 24.9952 29.7976 23.8103 29.3864 22.7101ZM14.9173 24.377C13.1816 22.1769 12.0678 20.1338 11.677 18.421C11.5169 17.7792 11.4791 17.1131 11.5656 16.4573C11.6339 15.9766 11.8105 15.5176 12.0821 15.1148C12.4163 14.6814 12.8458 14.3304 13.3374 14.0889C13.829 13.8475 14.3696 13.7219 14.9175 13.7219C15.4655 13.722 16.006 13.8476 16.4976 14.0892C16.9892 14.3307 17.4186 14.6817 17.7528 15.1151C18.0244 15.5181 18.201 15.9771 18.2693 16.4579C18.3556 17.114 18.3177 17.7803 18.1573 18.4223C17.7661 20.1349 16.6526 22.1774 14.9173 24.377ZM27.7406 25.8689C27.6212 26.6908 27.2887 27.4674 26.7762 28.1216C26.2636 28.7759 25.5887 29.2852 24.8183 29.599C24.0393 29.9111 23.1939 30.0217 22.3607 29.9205C21.4946 29.8089 20.6599 29.5239 19.9069 29.0824C18.7501 28.4325 17.5791 27.4348 16.2614 25.9712C18.3591 23.3846 19.669 21.0005 20.154 18.877C20.3723 17.984 20.4196 17.0579 20.2935 16.1475C20.1791 15.3632 19.8879 14.615 19.4419 13.9593C18.9194 13.2519 18.2378 12.6768 17.452 12.2805C16.6661 11.8842 15.798 11.6777 14.9175 11.6777C14.0371 11.6777 13.1689 11.8841 12.383 12.2803C11.5971 12.6765 10.9155 13.2515 10.393 13.9589C9.94707 14.6144 9.65591 15.3624 9.5414 16.1465C9.41524 17.0566 9.4623 17.9822 9.68011 18.8749C10.1648 20.9993 11.4748 23.384 13.5732 25.9714C12.2555 27.4348 11.0845 28.4325 9.92769 29.0825C9.17468 29.5239 8.34007 29.809 7.47395 29.9205C6.64065 30.0217 5.79525 29.9111 5.0162 29.599C4.24581 29.2852 3.57092 28.7759 3.05838 28.1217C2.54585 27.4674 2.21345 26.6908 2.09411 25.8689C1.97932 25.0334 2.07701 24.1825 2.37818 23.3946C2.49266 23.0728 2.62663 22.757 2.7926 22.3818C3.0274 21.851 3.27657 21.3115 3.51759 20.7898L3.54996 20.7197C5.75643 15.9419 8.12481 11.0982 10.5894 6.32294L10.6875 6.13283C10.9384 5.64601 11.1979 5.14267 11.4597 4.6563C11.7101 4.15501 12.0132 3.68171 12.3639 3.2444C12.6746 2.86903 13.0646 2.56681 13.5059 2.35934C13.9473 2.15186 14.4291 2.04426 14.9169 2.04422C15.4047 2.04418 15.8866 2.15171 16.3279 2.35911C16.7693 2.56651 17.1593 2.86867 17.4701 3.24399C17.821 3.68097 18.1242 4.15411 18.3744 4.65538C18.6338 5.13742 18.891 5.63623 19.1398 6.11858L19.2452 6.32315C21.7097 11.0979 24.078 15.9415 26.2847 20.7201L26.3046 20.7631C26.5498 21.2936 26.8033 21.8419 27.042 22.382C27.2082 22.7577 27.3424 23.0738 27.4566 23.3944C27.7576 24.1824 27.8553 25.0333 27.7406 25.8689Z"
                  fill="rgb(255, 56, 92)"
                ></path>
              </svg>
            </div>
          </a>
        </div>
        <div
          className={`w-[80vw] 3xl:w-[850px] flex flex-col items-center ${
            isScrolled
              ? "translate-y-[0px] md:translate-x-[5%]"
              : " translate-y-[80px] 2md:translate-y-0 2md:translate-x-0"
          }`}
        >
          <nav
            id="nav"
            className={`flex h-[80px] items-center justify-center transform duration-200 ${
              isScrolled ? "-translate-y-[100%] scale-0" : ""
            } `}
          >
            <span
              onClick={() => handleClick("Stays")}
              className={`cursor-pointer select-none py-3 px-4 mx-2 rounded-r-full rounded-l-full ${
                selected === "Stays"
                  ? "clicked"
                  : "hover:bg-gray-100 text-gray-500 hover:text-gray-800"
              }`}
            >
              Stays
            </span>
            <span
              onClick={() => handleClick("Experiences")}
              className={`cursor-pointer select-none py-3 px-4 mx-2 rounded-r-full rounded-l-full ${
                selected === "Experiences"
                  ? "clicked"
                  : " hover:bg-gray-100 text-gray-500 hover:text-gray-800"
              }`}
            >
              Experiences
            </span>
            <span
              onClick={() => handleClick("Online Experiences")}
              className={`cursor-pointer select-none py-3 px-4 rounded-r-full rounded-l-full ${
                selected === "Online Experiences"
                  ? "clicked"
                  : "hover:bg-gray-100 text-gray-500 hover:text-gray-800"
              }`}
            >
              Online Experiences
            </span>
          </nav>
          <div className="w-full 2md:w-auto">
            <div
              id="trip_selector"
              ref={tripRef}
              className={`relative flex items-center rounded-l-full rounded-r-full mb-4 shadow-md border gap-4 md:gap-0 border-gray-300 transform duration-200 ${
                isScrolled
                  ? "-translate-y-[100%] xs:-translate-y-[63%] md:-translate-y-[70%] w-[80vw] md:w-[350px] h-[56px] md:h-[48px]"
                  : "max-w-[850px] 2md:w-[850px] h-[66px]"
              } `}
            >
              {isScrolled && (
                <div
                  onClick={handleExpand}
                  className="absolute h-full w-full z-40"
                ></div>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className=" md:hidden block h-5 w-5 fill-black ml-4"
              >
                <path d="M13 0a13 13 0 0 1 10.5 20.67l7.91 7.92-2.82 2.82-7.92-7.91A12.94 12.94 0 0 1 13 26a13 13 0 1 1 0-26zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"></path>
              </svg>
              <div
                id="where"
                ref={whereRef}
                onClick={handleClickWhere}
                className={`relative form-1 py-4 h-full rounded-l-full rounded-r-full flex flex-col justify-center ${
                  isScrolled ? "w-[28%] md:pl-6" : "w-1/3 pl-8"
                } ${where ? "bg-white" : "hover:bg-gray-200"} `}
              >
                <h6
                  className={` cursor-pointer select-none ${
                    isScrolled ? "text-sm" : "text-xs"
                  } `}
                >
                  {isScrolled ? "Anywhere" : "Where"}
                </h6>
                <input
                  id="search_destination"
                  type="text"
                  className={`outline-none bg-transparent text-sm font-light select-none ${
                    isScrolled ? "hidden" : ""
                  } `}
                  placeholder="Search Destinations"
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                />
                <p className="md:hidden text-xs opacity-50 text-nowrap">
                  Any weeks . Add guests
                </p>
                <div
                  id="where_clicked"
                  className="hidden absolute rounded-3xl bg-white left-0 shadow-lg -bottom-[510px] w-[478px] h-[498px]"
                >
                  <div className="py-5 px-10">
                    <div className="pt-8">
                      <p className="font-medium text-sm tracking-wide">
                        Search by Region
                      </p>
                    </div>
                    <div className="flex flex-wrap mt-8 gap-3 gap-y-6">
                      <Region
                        text="I'm flexible"
                        imgSrc={region_1}
                        handleClickWho={handleClickWho}
                        setInputValue={setInputValue}
                      />
                      <Region
                        text="Europe"
                        imgSrc={region_2}
                        handleClickWho={handleClickWho}
                        setInputValue={setInputValue}
                      />
                      <Region
                        text="Spain"
                        imgSrc={region_3}
                        handleClickWho={handleClickWho}
                        setInputValue={setInputValue}
                      />
                      <Region
                        text="Middle East"
                        imgSrc={region_4}
                        handleClickWho={handleClickWho}
                        setInputValue={setInputValue}
                      />
                      <Region
                        text="Turkey"
                        imgSrc={region_5}
                        handleClickWho={handleClickWho}
                        setInputValue={setInputValue}
                      />
                      <Region
                        text="South East Asia"
                        imgSrc={region_6}
                        handleClickWho={handleClickWho}
                        setInputValue={setInputValue}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="check_in"
                ref={CheckInRef}
                onClick={handleClickCheckIn}
                className={`hidden md:block py-4 h-full rounded-l-full rounded-r-full pl-6 ${
                  stateExperiences ? "w-1/3" : "w-1/6"
                } ${checkIn ? "bg-white" : "hover:bg-gray-200"} ${
                  checkIn
                    ? ""
                    : stateExperiences
                    ? "form-2-big"
                    : "form-2-small"
                } ${isScrolled ? "!w-1/3 flex items-center" : ""} `}
              >
                <h6
                  className={` cursor-pointer select-none ${
                    isScrolled ? "text-sm" : "text-xs"
                  } `}
                >
                  {isScrolled
                    ? "Any week"
                    : stateExperiences
                    ? "Date"
                    : "Check in"}
                </h6>
                <p
                  className={` text-sm cursor-pointer select-none font-light opacity-60  ${
                    isScrolled ? "hidden" : ""
                  } `}
                >
                  Add Dates
                </p>
                <div
                  id="check_in_clicked"
                  className="hidden absolute rounded-3xl bg-white left-0 shadow-lg -bottom-[510px] w-full h-[555px] top-[76px]"
                >
                  <div className="py-5 px-10 h-full">
                    <div className="pt-8">
                      <p className="font-medium text-sm tracking-wide">
                        Custom Date Picker
                      </p>
                    </div>
                    <div className="flex items-center justify-center h-[400px] ">
                      <p>Date Picker not available :(</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="check_out"
                ref={CheckOutRef}
                onClick={handleClickCheckOut}
                className={`hidden md:block form-3 w-1/6 py-4 pl-6 h-full rounded-l-full rounded-r-full ${
                  stateExperiences ? "md:hidden" : ""
                } ${checkOut ? "bg-white" : "hover:bg-gray-200"} ${
                  isScrolled ? "md:hidden" : ""
                } `}
              >
                <h6 className="text-xs cursor-pointer select-none">
                  Check out
                </h6>
                <p className="text-sm cursor-pointer select-none font-light opacity-60">
                  Add Dates
                </p>
              </div>
              <div
                id="who"
                ref={WhoRef}
                onClick={handleClickWho}
                className={`hidden md:block form-4 w-1/3 py-4 h-full rounded-l-full rounded-r-full ${
                  isScrolled ? "items-center flex" : "pl-8"
                }  ${who ? "bg-white" : "hover:bg-gray-200"}`}
              >
                <h6
                  className={`text-xs cursor-pointer select-none ${
                    isScrolled ? "hidden" : ""
                  }`}
                >
                  Who
                </h6>
                <p
                  id="guest_text"
                  className={`text-sm text-ellipsis cursor-pointer select-none font-light opacity-60 text-nowrap overflow-hidden ${
                    searchExpended ? "w-32" : ""
                  } `}
                >
                  {isScrolled
                    ? "Add Guests"
                    : totalAdults > 0
                    ? `${totalAdults + totalChildren} guests${
                        totalInfants > 0 ? `, ${totalInfants} infants` : ""
                      }${totalPets > 0 ? `, ${totalPets} pets` : ""}`
                    : "Add Guests"}
                </p>
                <div
                  id="who_clicked"
                  className={`absolute rounded-3xl bg-white right-0 shadow-lg -bottom-[407px] w-[406px] h-[395px] ${
                    who ? "" : "hidden"
                  }`}
                >
                  <div className="py-5 px-10 flex-col flex justify-center">
                    <ParentGuestSelector
                      onAdultChange={handleAdultChange}
                      onChildrenChange={handleChildrenChange}
                      onInfantsChange={handleInfantsChange}
                      onPetsChange={handlePetsChange}
                      disablePlus={disablePlus}
                      noAdult={noAdult}
                    />
                  </div>
                </div>
              </div>
              <div
                className={`hidden md:block absolute w-[1px] bg-gray-300 border-form-1 ${
                  isScrolled ? "left-[30%] h-[25px]" : "left-1/3 h-[32px]"
                } ${checkIn ? "md:hidden" : ""} ${where ? "md:hidden" : ""} `}
              ></div>
              <div
                className={`hidden md:block absolute w-[1px] bg-gray-300 border-form-3 ${
                  isScrolled ? "right-[42%] h-[25px]" : "right-1/3 h-[32px]"
                } ${stateExperiences ? (checkIn ? "md:hidden" : "") : ""} ${
                  checkOut ? "md:hidden" : ""
                } ${who ? "md:hidden" : ""} `}
              ></div>
              <div
                id="border-2"
                className={`hidden md:block absolute right-1/2 h-[32px] w-[1px] bg-gray-300 border-form-2 ${
                  isScrolled ? "md:hidden" : ""
                } ${stateExperiences ? "md:hidden" : ""} ${
                  checkIn ? "md:hidden" : ""
                } ${checkOut ? "md:hidden" : ""} `}
              ></div>
              <div
                className={`absolute hidden md:flex items-center right-2 bg-search-initial rounded-full transition-all duration-300 delay-150 transform ${
                  isScrolled ? "w-8 h-8 flex justify-center" : "p-4 h-12"
                } `}
              >
                <a
                  href={`https://www.airbnb.com/s/${inputValue}/homes?tab_id=home_tab&adults=${totalAdults}&children=${totalChildren}&infants=${totalInfants}&pets=${totalPets}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Search"
                  className="flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    role="presentation"
                    focusable="false"
                    className={`block stroke-white fill-white stroke-[4] overflow-visible ${
                      isScrolled ? "h-3 w-3" : "h-4 w-4"
                    }`}
                  >
                    <path
                      fill="none"
                      d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
                    ></path>
                  </svg>
                  <p
                    id="search_expended"
                    className={`text-white font-medium text-[15px] px-2 ${
                      searchExpended ? "" : "hidden"
                    } `}
                  >
                    Search
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-10 md:w-[102px] items-center justify-center">
          <div className="flex md:hidden w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="block fill-black h-4 w-4 stroke-black stroke-[4] overflow-visible"
            >
              <path
                fill="none"
                d="M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 0H3"
              ></path>
            </svg>
          </div>
        </div>
        <div className="hidden md:flex items-center h-[80px] gap-2 absolute right-10 xl:right-[80px]">
          <a
            href="/"
            className="hidden md:flex rounded-l-full rounded-r-full hover:bg-gray-50 py-3 px-4 text-sm"
          >
            Airbnb your home
          </a>
          <a
            href="/"
            className="hidden md:flex rounded-full p-3 hover:bg-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="block h-4 w-4"
            >
              <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path>
            </svg>
          </a>
          <div
            onClick={handleProfile}
            ref={ProfileRef}
            className="md:h-12 md:w-[86px] flex gap-4 justify-center md:justify-normal items-center border border-gray-500 md:border-gray-300 rounded-l-full rounded-r-full px-3 hover:shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="hidden md:block h-4 w-4 stroke-[3] overflow-visible stroke-[#111111]"
            >
              <g>
                <path d="M2 16h28M2 24h28M2 8h28"></path>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="hidden md:block h-8 w-8 fill-[#717171]"
            >
              <path d="M16 .7C7.56.7.7 7.56.7 16S7.56 31.3 16 31.3 31.3 24.44 31.3 16 24.44.7 16 .7zm0 28c-4.02 0-7.6-1.88-9.93-4.81a12.43 12.43 0 0 1 6.45-4.4A6.5 6.5 0 0 1 9.5 14a6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-3.02 5.5 12.42 12.42 0 0 1 6.45 4.4A12.67 12.67 0 0 1 16 28.7z"></path>
            </svg>
          </div>
          <div
            className={`absolute top-20 right-0 w-[240px] h-[243px] shadow-md rounded-2xl bg-white text-sm font-light ${
              profileDropdown ? "" : "hidden"
            } `}
          >
            <div className="border-b border-gray-300 gap-2 flex flex-col">
              <p className="flex items-center pl-4 mt-2 font-normal w-full h-10 hover:bg-gray-100">
                Sign up
              </p>
              <p className="flex items-center mb-4 w-full h-8 pl-4 hover:bg-gray-100">
                Log in
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="flex items-center pl-4 mt-2 font-normal w-full h-10 hover:bg-gray-100">
                Gift cards
              </p>
              <p className="flex items-center w-full h-8 pl-4 hover:bg-gray-100">
                Airbnb your home
              </p>
              <p className="flex items-center mb-4 w-full h-8 pl-4 hover:bg-gray-100">
                Help Center
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

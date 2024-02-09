import "../styles/TypePicker.css";
import StayType from "./StayType";
import "../output.css";

function TypePicker() {
  return (
    <div className="flex flex-row items-center shadow-sm bg-white justify-center w-full md:pt-3 h-[90px] sticky top-[80px] lg:px-10 xl:px-20 gap-4 z-50">
      <StayType />
      <div className="hidden md:block">
        <button className="px-4 py-2 text-xs h-12 rounded-xl border border-gray-300 flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="block h-4 w-4 stroke-[3] overflow-visible stroke-[#111111] "
            aria-hidden="true"
            role="presentation"
            focusable="false"
          >
            <path
              fill="none"
              d="M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 0H3"
            ></path>
          </svg>
          Filters
        </button>
      </div>
      <label
        for="toggle"
        className="hidden md:flex px-4 py-2 text-xs select-none tracking-wide h-12 rounded-xl border border-gray-300 gap-2 items-center text-nowrap"
      >
        Display total before taxes
        <label class="switch">
          <input id="toggle" type="checkbox" />
          <span class="round slider" />
          <svg
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
            role="presentation"
            focusable="false"
            className="svg-taxes block h-3 w-3 fill-black"
          >
            <path d="m10.5 1.939 1.061 1.061-7.061 7.061-.53-.531-3-3-.531-.53 1.061-1.061 3 3 5.47-5.469z"></path>
          </svg>
        </label>
      </label>
    </div>
  );
}

export default TypePicker;

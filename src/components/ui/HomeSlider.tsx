import { Carousel } from "flowbite-react";
import sliderImage from "../../img/slider1.jpg";
import sliderImage2 from "../../img/slider2.jpg";

import { IoIosArrowForward } from "react-icons/io";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Flowbite } from "flowbite-react";

export const HomeSlider = () => {
  const customTheme: CustomFlowbiteTheme = {
    carousel: {
      root: {
        leftControl: "absolute left-0 top-0 flex h-full items-center justify-center px-2 focus:outline-none",
        rightControl: "absolute right-0 top-0 flex h-full items-center justify-center px-2 focus:outline-none",
      },
      indicators: {
        active: {
          off: "bg-zinc-800/50 hover:bg-zinc-800",
          on: "bg-zinc-800",
        },
        base: "size-2 rounded-full",
      },
      control: {
        base: "inline-flex size-6 items-center justify-center rounded-full group-focus:outline-none group-focus:ring-1 group-hover:bg-zinc-800/30 group-focus:ring-zinc-800/70",
        icon: "size-4 text-white text-zinc-800",
      },
    },
  };

  return (
    <div className="h-[180px]">
      <Flowbite theme={{ theme: customTheme }}>
        <Carousel slideInterval={10000} pauseOnHover>
          <div className="py-6 h-[180px] flex-col items-start gap-3 justify-center rounded-md relative overflow-hidden bg-transparent flex duration-700 ease-in-out">
            <div className="z-20 pl-10 flex flex-col gap-4 items-start sm:w-2/3 w-full">
              <div>
                <h2 className="sm:text-2xl text-xl font-semibold">Oglądaj mecze na żywo!</h2>
                <p data-tooltip-class-name="sm:text-sm text-xs mt-2 font-light">Piłkarskie emocje z Trybuna TV</p>
              </div>

              <a href="https://www.youtube.com/@TrybunaTV" target="_blank">
                <button className="text-sm py-2 px-3 rounded-md bg-white text-red-600 flex flex-row items-center gap-2">
                  Zobacz <IoIosArrowForward />
                </button>
              </a>
            </div>
            <div className="bg-gradient-to-r from-[#ed4535] sm:from-50% from-20% to-transparent absolute w-[470px] h-[200px] z-10"></div>
            <img className="absolute z-0 object-cover h-full w-full" src={sliderImage} alt="" />
          </div>
          <div className="py-6 h-[180px] flex-col items-start gap-3 justify-center rounded-md relative overflow-hidden bg-transparent flex duration-700 ease-in-out">
            <div className="z-20 pl-10 flex flex-col gap-4 items-start sm:w-2/3 w-full">
              <div>
                <h2 className="sm:text-2xl text-xl font-semibold">Śledź naszego Instagrama</h2>
                <p data-tooltip-class-name="sm:text-sm text-xs mt-2 font-light">Zobacz co na murawie piszczy</p>
              </div>

              <a href="https://www.instagram.com/trybunatv/" target="_blank">
                <button className="text-sm py-2 px-3 rounded-md bg-white text-[#5e742c] flex flex-row items-center gap-2">
                  Zostaw follow <IoIosArrowForward />
                </button>
              </a>
            </div>
            <div className="bg-gradient-to-r from-[#5e742c] sm:from-50% from-20% to-transparent absolute w-[470px] h-[200px] z-10"></div>
            <img className="absolute z-0 object-cover h-full w-full" src={sliderImage2} alt="" />
          </div>
        </Carousel>
      </Flowbite>
    </div>
  );
};

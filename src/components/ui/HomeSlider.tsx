import { IoIosArrowForward } from "react-icons/io";
import sliderImage from "../../img/slider1.jpg";

export const HomeSlider = () => {
  return (
    <div className="py-6  h-[180px] flex flex-col items-start gap-3 justify-center rounded-md relative overflow-hidden bg-transparent">
      <div className="z-20 pl-9 flex flex-col gap-4 items-start w-2/3">
        <div>
          <h2 className="text-2xl font-semibold">Oglądaj mecze na żywo!</h2>
          <p className="text-sm mt-2 font-light">Piłkarskie emocje z Trybuna TV</p>
        </div>

        <button className="text-sm py-2 px-3 rounded-md bg-white text-red-600 flex flex-row items-center gap-2">
          Zobacz <IoIosArrowForward />
        </button>
      </div>
      <div className="bg-gradient-to-r from-[#ed4535] from-50% to-transparent absolute w-[470px] h-[200px] z-10"></div>
      <img className="absolute z-0 object-cover h-full w-full" src={sliderImage} alt="" />
    </div>
  );
};

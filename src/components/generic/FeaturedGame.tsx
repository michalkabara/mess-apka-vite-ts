import defaultCrest from "../../img/crest_default.svg";
import { FaRegClock } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { PiClockCountdownBold } from "react-icons/pi";

export const FeaturedGame = () => {
  return (
    <div className="bg-zinc-200 dark:bg-zinc-800 rounded-lg p-5 text-zinc-700 dark:text-white flex flex-col items-center gap-5">
      <h3 className="font-bold">Featured Game</h3>
      <div className="flex flex-row gap-6 items-start">
        <div className="flex flex-col text-sm items-center gap-2">
          <img src={defaultCrest} alt="" className="w-16" />
          <p className="text-xs">Nazwa drużyny</p>
        </div>

        <span className="h-full flex items-center">VS</span>
        <div className="flex flex-col text-sm items-center gap-2">
          <img src={defaultCrest} alt="" className="w-16" />
          <p className="text-xs">Nazwa drużyny</p>
        </div>
      </div>
      <div className="flex flex-row gap-5 text-xs mt-2">
        <div className="flex flex-row gap-2 items-center">
          <FaRegClock className="size-4" />
          12:00
        </div>
        <div className="flex flex-row gap-2 items-center">
          <FaRegCalendarAlt className="size-4" />
          12.12.2024
        </div>
        <div className="flex flex-row gap-2 items-center">
          <PiClockCountdownBold className="size-5" />
          02:02:12
        </div>
      </div>
    </div>
  );
};

import { FaRegClock } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { PiClockCountdownBold } from "react-icons/pi";
import { useFetchFeaturedGame } from "../../customHooks/useFetchFeaturedGame";
import { DateDisplay } from "./DateDisplay";
import { Link } from "react-router-dom";

export const FeaturedGame = () => {
  const { isPending, error, data } = useFetchFeaturedGame();

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>An error has occurred {error.message}</p>;

  const gameDate = new Date(data.date);

  return (
    <div className="bg-white dark:bg-zinc-800 dark:bg-opacity-50 rounded-lg p-5 text-zinc-700 dark:text-white flex flex-col items-center gap-5">
      <h3 className="font-bold">Wyróżniony mecz</h3>

      <div className="grid grid-cols-3 gap-2 items-start">
        <Link to={`/team/${data.homeTeam?.id}`} className="">
          <div className="flex flex-col text-sm items-center gap-2 justify-center">
            <img src={data.homeTeam?.logoUrl} alt="" className="size-16 rounded-md p-1 bg-white" />
            <p className="text-xs text-center line-clamp-2">{data.homeTeam?.name}</p>
          </div>
        </Link>

        <span className="h-full flex items-center justify-center text-md font-semibold text-center whitespace-nowrap ">
          <Link to={`/game/${data.id}`} className="dark:bg-zinc-900 bg-zinc-200 py-2 px-4 rounded-3xl" reloadDocument>
            {data.homeGoals ?? "0"} : {data.awayGoals ?? "0"}
          </Link>
        </span>

        <Link to={`/team/${data.awayTeam?.id}`} className="">
          <div className="flex flex-col text-sm items-center gap-2 justify-center">
            <img src={data.awayTeam?.logoUrl} alt="" className="size-16 rounded-md p-1 bg-white" />
            <p className="text-xs text-center line-clamp-2">{data.awayTeam?.name}</p>
          </div>
        </Link>
      </div>
      <div className="flex flex-row gap-5 text-xs mt-2">
        <div className="flex flex-row gap-2 items-center">
          <FaRegCalendarAlt className="size-4" />
          <DateDisplay gameDate={gameDate} format="DD.MM.YYYY" />
        </div>
        <div className="flex flex-row gap-2 items-center">
          <FaRegClock className="size-4" />
          <DateDisplay gameDate={gameDate} format="HH:mm" />
        </div>

        <div className="flex flex-row gap-2 items-center">
          <PiClockCountdownBold className="size-5" />
          {data.isFinished ? "Zakończony" : "TBD"}
        </div>
      </div>
    </div>
  );
};

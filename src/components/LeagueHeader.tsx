import { useFavouriteLeaguesContext } from "../context/FavouriteLeaguesContext";
import { RiStarSmileFill, RiStarSmileLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

type LegueHeaderType = {
  leagueName: string;
  subLeagues?: string[];
  isActive: boolean;
  toggleSection: () => void;
};

export const LeagueHeader: React.FC<LegueHeaderType> = ({ leagueName, isActive, toggleSection }) => {
  const { favouriteLeagues, removeFavouriteLeague, addFavouriteLeague } = useFavouriteLeaguesContext();

  const toggleFavouriteLeague = (league: { name: string }) => {
    if (favouriteLeagues.some((league: { name: string }) => league.name === leagueName)) {
      removeFavouriteLeague(league.name);
    } else {
      addFavouriteLeague(league);
    }
  };

  return (
    <div className="league-name text-center relative flex bg-zinc-700 rounded-md py-2 px-3 items-center justify-between">
      <button onClick={() => toggleFavouriteLeague({ name: leagueName })}>
        {favouriteLeagues.some((league: { name: string }) => league.name === leagueName) ? (
          <RiStarSmileFill className=" size-4 text-yellow-500" />
        ) : (
          <RiStarSmileLine className="size-4 " />
        )}
      </button>

      <Link to="/teams">
        <span className="text-xs uppercase hover:underline">Liga Okręgowa {leagueName}</span>
      </Link>

      <IoIosArrowDown
        className={`w-6 toggle-button cursor-pointer ease-in-out duration-500 transition-all ${isActive && "rotate"}`}
        onClick={toggleSection}
      />
    </div>
  );
};

import { useFavouriteLeaguesContext } from "../../customHooks/useFavouriteLeaguesContext";
import { RiStarSmileFill, RiStarSmileLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { LegueHeaderType } from "../../types/leagueTypes";

export const LeagueHeader: React.FC<LegueHeaderType> = ({
  leagueName,
  isActive,
  toggleSection,
  leagueId,
  isLinkEnabled,
  hideArrow,
}) => {
  const { favouriteLeagues, removeFavouriteLeague, addFavouriteLeague } = useFavouriteLeaguesContext();

  const toggleFavouriteLeague = (league: { name: string; id: string | undefined }) => {
    if (favouriteLeagues.some((league: { name: string }) => league.name === leagueName)) {
      removeFavouriteLeague(league.name);
    } else {
      addFavouriteLeague(league);
    }
  };

  return (
    <div
      className={`league-name text-center relative flex bg-transparent ${
        hideArrow ? "dark:bg-transparent bg-transparent" : "bg-zinc-200 dark:bg-zinc-800"
      } rounded-md py-1 px-3 items-center justify-center ${hideArrow ? "gap-3" : "justify-between"} w-full`}
    >
      <button
        onClick={() => {
          toggleFavouriteLeague({ name: leagueName, id: leagueId });
        }}
      >
        {favouriteLeagues.some((league: { name: string }) => league.name === leagueName) ? (
          <RiStarSmileFill className=" size-4 text-yellow-500" />
        ) : (
          <RiStarSmileLine className="size-4 " />
        )}
      </button>

      {isLinkEnabled ? (
        <Link to={`/league/${leagueId}`}>
          <span className="text-xs uppercase hover:underline">{leagueName}</span>
        </Link>
      ) : (
        <p className="text-xs uppercase">{leagueName}</p>
      )}

      {hideArrow ? (
        <div></div>
      ) : (
        <IoIosArrowDown
          className={`w-6 toggle-button cursor-pointer ease-in-out duration-500 transition-all ${isActive && "rotate"}`}
          onClick={toggleSection}
        />
      )}
    </div>
  );
};

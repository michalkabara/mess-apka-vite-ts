import { RiTeamLine, RiTrophyLine, RiStarSmileFill } from "react-icons/ri";
import { useFavouriteTeamContext } from "../customHooks/useFavouriteTeamsContext";
import { useFavouriteLeaguesContext } from "../customHooks/useFavouriteLeaguesContext";
import { Link } from "react-router-dom";
import { FaRegNewspaper } from "react-icons/fa6";

export const Sidebar: React.FC<{ handleMenuItemClick: () => void }> = ({ handleMenuItemClick }) => {
  const { favouriteTeams, removeFavouriteTeam } = useFavouriteTeamContext();

  const { favouriteLeagues, removeFavouriteLeague } = useFavouriteLeaguesContext();

  return (
    <div className="text-zinc-900 dark:text-white text-sm flex flex-col gap-4 sticky top-2 w-full">
      <div>
        <div className="flex flex-row gap-2 items-center bg-[#ed4535] hover:bg-[#d63c2e] rounded-md px-2 py-1 mb-2 cursor-pointer transition-colors ease-in-out text-zinc-100">
          <h3 className="font-bold ">News</h3>
          <FaRegNewspaper className="" />
        </div>
        <div className="flex flex-row gap-2 items-center">
          <h3 className="font-bold mb-2">Moje Ligi</h3>
          <RiTrophyLine className="-translate-y-1" />
        </div>

        <div className="flex flex-col gap-2 text-xs">
          {favouriteLeagues.map((favLeague: { name: string; id?: string }) => (
            <div key={favLeague.name} className="flex flex-row gap-2 items-center text-xs justify-between">
              <Link to={`/league/${favLeague.id}`} className="truncate capitalize" onClick={handleMenuItemClick}>
                {favLeague.name}
              </Link>

              <div>
                <RiStarSmileFill
                  onClick={() => {
                    removeFavouriteLeague(favLeague.name);
                  }}
                  className="text-yellow-500 size-4 cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="flex flex-row gap-2 items-center">
          <h3 className="font-bold mb-2">Moje Drużyny</h3>
          <RiTeamLine className="-translate-y-1" />
        </div>

        <div className="flex flex-col gap-2">
          {favouriteTeams.map((team: { name: string; id: string }) => (
            <div key={team.id} className="flex flex-row gap-2 items-center text-xs justify-between">
              <Link to={`/team/${team.id}`} className="truncate" onClick={handleMenuItemClick}>
                {team.name}
              </Link>

              <div>
                <RiStarSmileFill
                  onClick={() => {
                    removeFavouriteTeam(team.id);
                  }}
                  className="text-yellow-500 size-4 cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

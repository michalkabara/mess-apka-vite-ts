import { RiStarSmileFill, RiTeamLine } from "react-icons/ri";
import { useFavouriteTeamContext } from "../../customHooks/useFavouriteTeamsContext";
import { Link } from "react-router-dom";

export const FavouriteTeams: React.FC<{ handleMenuItemClick?: () => void }> = ({ handleMenuItemClick }) => {
  const { favouriteTeams, removeFavouriteTeam } = useFavouriteTeamContext();

  return (
    <>
      <div>
        <div className="flex flex-row gap-2 items-center">
          <h3 className="font-bold mb-2">Moje Drużyny</h3>
          <RiTeamLine className="-translate-y-1" />
        </div>

        <div className="flex flex-col gap-3 font-light">
          {favouriteTeams.length > 0 ? (
            favouriteTeams.map((team) => (
              <div key={team.id} className="flex flex-row gap-2 items-center text-xs justify-between">
                <Link to={`/team/${team.id}`} className="truncate" onClick={handleMenuItemClick}>
                  {team.name}
                </Link>
                <div>
                  <RiStarSmileFill
                    onClick={() => {
                      if (!team.id) return;
                      removeFavouriteTeam(team.id);
                    }}
                    className="text-yellow-500 size-4 cursor-pointer"
                  />
                </div>
              </div>
            ))
          ) : (
            <p className="text-xs opacity-70 font-extralight">Dodaj drużynę do ulubionych</p>
          )}
        </div>
      </div>
    </>
  );
};

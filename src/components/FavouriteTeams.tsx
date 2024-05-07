import { RiStarSmileFill, RiTeamLine } from "react-icons/ri";
import { useFavouriteTeamContext } from "../customHooks/useFavouriteTeamsContext";
import { Link } from "react-router-dom";
import { FC } from "react";

export const FavouriteTeams: FC<{ handleMenuItemClick?: () => void }> = ({ handleMenuItemClick }) => {
  const { favouriteTeams, removeFavouriteTeam } = useFavouriteTeamContext();

  return (
    <>
      <div>
        <div className="flex flex-row gap-2 items-center">
          <h3 className="font-bold mb-2">Moje Drużyny</h3>
          <RiTeamLine className="-translate-y-1" />
        </div>

        <div className="flex flex-col gap-2">
          {favouriteTeams.map((team: { name: string | undefined; id: string | undefined }) => (
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
          ))}
        </div>
      </div>
    </>
  );
};

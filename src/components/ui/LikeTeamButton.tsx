import { RiStarSmileFill, RiStarSmileLine } from "react-icons/ri";
import { useFavouriteTeamContext } from "../../customHooks/useFavouriteTeamsContext";
import { FavouriteTeam } from "../../context/FavouriteTeamsContext";

interface ILikeTeamButton {
  teamName?: string;
  teamId?: string;
}

export const LikeTeamButton: React.FC<ILikeTeamButton> = ({ teamName, teamId }) => {
  const { favouriteTeams, addFavouriteTeam, removeFavouriteTeam } = useFavouriteTeamContext();

  const toggleFavouriteTeam = (team: FavouriteTeam) => {
    if (favouriteTeams.some((team: { id: string | undefined }) => team.id === teamId)) {
      if (!team.id) return;
      removeFavouriteTeam(team.id);
    } else {
      addFavouriteTeam(team);
    }
  };

  return (
    <button
      onClick={() => {
        toggleFavouriteTeam({ name: teamName, id: teamId });
      }}
    >
      {favouriteTeams.some((item: { id: string | undefined }) => item.id === teamId) ? (
        <RiStarSmileFill className=" text-2xl text-yellow-500" />
      ) : (
        <RiStarSmileLine className="text-2xl " />
      )}
    </button>
  );
};

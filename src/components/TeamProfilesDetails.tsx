import defaultCrest from "../img/crest_default.svg";
import { FaSquareXTwitter, FaSquareYoutube, FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";
import { RiStarSmileLine, RiStarSmileFill } from "react-icons/ri";
import { useFavouriteTeamContext } from "../customHooks/useFavouriteTeamsContext";
import { useFetchLeagueData } from "../customHooks/useFetchLeagueData";
import { Link } from "react-router-dom";

export const TeamProfileDetails: React.FC<{
  teamLogo: string;
  teamName: string;
  teamId: string;
  currentLeague: string;
}> = ({ teamLogo, teamName, teamId, currentLeague }) => {
  const { favouriteTeams, addFavouriteTeam, removeFavouriteTeam } = useFavouriteTeamContext();

  const toggleFavouriteTeam = (team: { name: string; id: string }) => {
    if (favouriteTeams.some((team: { id: string }) => team.id === teamId)) {
      removeFavouriteTeam(team.id);
    } else {
      addFavouriteTeam(team);
    }
  };

  const { isPending, error, data } = useFetchLeagueData(currentLeague);

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>An error has occurred {error.message}</p>;

  return (
    <div className="league-name pt-4 flex items-start flex-row gap-5">
      {teamLogo ? (
        <img src={teamLogo} alt={teamName} className="w-[100px] rounded-md p-1 bg-white" />
      ) : (
        <img src={defaultCrest} alt="Herb" className="w-20 rounded-md p-1 bg-white" />
      )}
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center gap-3">
          <span className="text-lg font-bold uppercase ">{teamName}</span>

          <button
            onClick={() => {
              toggleFavouriteTeam({ name: teamName, id: teamId });
            }}
          >
            {favouriteTeams.some((item: { id: string }) => item.id === teamId) ? (
              <RiStarSmileFill className=" text-2xl text-yellow-500" />
            ) : (
              <RiStarSmileLine className="text-2xl " />
            )}
          </button>
        </div>

        <div className="text-sm">
          <p>
            <b>Rok założenia:</b> 1982
          </p>
          <p>
            <b>Barwy klubu:</b> czarno zielono białe
          </p>
          <p>
            <b>Rozgrywki:</b>{" "}
            <Link className="hover:underline" to={`/league/${currentLeague}`}>
              {data.name}
            </Link>
          </p>
          <p>
            <b>Sezon:</b> 2023/24
          </p>
        </div>
        <div className="flex flex-row gap-2 text-2xl">
          <a href="">
            <FaSquareFacebook />
          </a>
          <a href="">
            <FaSquareInstagram />
          </a>

          <a href="">
            <FaSquareXTwitter />
          </a>
          <a href="">
            <FaSquareYoutube />
          </a>
          <a href="" rel="nofollow">
            <IoGlobeOutline />
          </a>
        </div>
      </div>
    </div>
  );
};

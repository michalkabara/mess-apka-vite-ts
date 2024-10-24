import { Link } from "react-router-dom";
import { LikeTeamButton } from "../ui/LikeTeamButton";
import { PartialGame } from "../../types/gameTypes";

export const GameDetailsTeams: React.FC<{ data: PartialGame }> = ({ data }) => {
  return (
    <div className="grid grid-cols-5 gap-1 md:gap-5 mt-7 items-start justify-items-center relative">
      <div className="translate-y-3 sm:translate-y-10 sm:translate-x-12">
        {data.homeTeam ? (
          <LikeTeamButton teamId={data.homeTeam.id} teamName={data.homeTeam.name}></LikeTeamButton>
        ) : null}
      </div>
      <Link to={`/team/${data.homeTeam?.id}`}>
        <div className="flex flex-col text-center text-xs gap-3 items-center ">
          <img
            src={data.homeTeam?.logoUrl}
            alt={data.homeTeam?.name}
            className="md:size-20 lg:size-24 size-12 rounded-md p-1 bg-white"
          />
          <p>{data.homeTeam?.name}</p>
        </div>
      </Link>

      <span className="text-center font-semibold text-nowrap sm:text-2xl md:text-4xl m-auto sm:-translate-y-3 -translate-y-5">
        {data.homeGoals} - {data.awayGoals}
      </span>

      <Link to={`/team/${data.awayTeam?.id}`}>
        <div className="flex flex-col text-center text-xs gap-3 items-center">
          <img
            src={data.awayTeam?.logoUrl}
            alt={data.awayTeam?.name}
            className="md:size-20 lg:size-24 size-12 rounded-md p-1 bg-white"
          />
          <p>{data.awayTeam?.name}</p>
        </div>
      </Link>
      <div className="translate-y-3 sm:translate-y-10 sm:-translate-x-12">
        <LikeTeamButton teamId={data.awayTeam?.id} teamName={data.awayTeam?.name}></LikeTeamButton>
      </div>
    </div>
  );
};

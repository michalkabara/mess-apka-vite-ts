import { FC } from "react";
import defaultCrest from "../../img/crest_default.svg";
import { PartialGame } from "../../types";
import { DateDisplay } from "../ui/DateDisplay";
import { IoMdTrophy } from "react-icons/io";

export const SingleGame: FC<PartialGame> = ({ date, homeTeam, awayTeam, homeGoals, awayGoals }) => {
  const gameDate = new Date(date ?? 0);

  const homeTrophy = awayGoals && homeGoals && homeGoals > awayGoals && <IoMdTrophy className="text-zinc-600" />;
  const awayTrophy = awayGoals && homeGoals && awayGoals > homeGoals && <IoMdTrophy className="text-zinc-600" />;

  return (
    <>
      <div className=" text-left" id="time-container">
        <DateDisplay gameDate={gameDate} />
      </div>
      <div className="text-left w-full" id="teams-container">
        <div className="flex flex-row gap-2 content-start items-center" id="team1-container">
          {homeTeam?.logoUrl ? (
            <img src={homeTeam.logoUrl} alt={homeTeam.name} className="size-5 rounded-sm p-[1px] bg-white" />
          ) : (
            <img src={defaultCrest} alt="Herb" className="w-5 rounded-sm p-[1px]  bg-white" />
          )}
          <p className="truncate">{homeTeam?.name}</p>
          {homeTrophy}
        </div>
        <div className="mt-2 flex flex-row gap-2 items-center" id="team2-container">
          {awayTeam?.logoUrl ? (
            <img src={awayTeam.logoUrl} alt={awayTeam.name} className="size-5 rounded-sm p-[1px]  bg-white" />
          ) : (
            <img src={defaultCrest} alt="Herb" className="w-5 rounded-sm p-[1px] bg-white" />
          )}
          <p className="truncate">{awayTeam?.name}</p>
          {awayTrophy}
        </div>
      </div>
      <div className="flex flex-col gap-2 w-4 items-end">
        <div>{homeGoals ?? "TBD"}</div>
        <div>{awayGoals ?? "TBD"}</div>
      </div>
    </>
  );
};

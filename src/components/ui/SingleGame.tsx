import defaultCrest from "../../img/crest_default.svg";
import { PartialGame } from "../../types/gameTypes";
import { DateDisplay } from "./DateDisplay";
import { IoMdTrophy } from "react-icons/io";

export const SingleGame: React.FC<PartialGame> = ({ date, homeTeam, awayTeam, homeGoals, awayGoals }) => {
  const gameDate = new Date(date ?? 0);

  let homeTrophy;
  let awayTrophy;

  if ((homeGoals ?? 0) > (awayGoals ?? 0)) {
    homeTrophy = <IoMdTrophy className="text-amber-400" />;
  }

  if ((awayGoals ?? 0) > (homeGoals ?? 0)) {
    awayTrophy = <IoMdTrophy className="text-amber-400" />;
  }

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
          <p className="truncate w-max sm:max-w-fit max-w-24">{homeTeam?.name}</p>
          {homeTrophy}
        </div>
        <div className="mt-2 flex flex-row gap-2 items-center" id="team2-container">
          {awayTeam?.logoUrl ? (
            <img src={awayTeam.logoUrl} alt={awayTeam.name} className="size-5 rounded-sm p-[1px]  bg-white" />
          ) : (
            <img src={defaultCrest} alt="Herb" className="w-5 rounded-sm p-[1px] bg-white" />
          )}
          <p className="truncate w-max sm:max-w-fit max-w-24">{awayTeam?.name}</p>
          {awayTrophy}
        </div>
      </div>
      <div className="flex flex-col gap-2 w-4 items-end">
        <div className={(homeGoals ?? 0) > (awayGoals ?? 0) ? `font-extrabold` : ``}>{homeGoals ?? "TBD"}</div>
        <div className={(awayGoals ?? 0) > (homeGoals ?? 0) ? `font-extrabold` : ``}>{awayGoals ?? "TBD"}</div>
      </div>
    </>
  );
};

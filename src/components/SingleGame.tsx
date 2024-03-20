import defaultCrest from "../img/crest_default.svg";
import { Game } from "../types";

export const SingleGame: React.FC<Game> = ({ date, homeTeam, awayTeam, homeGoals, awayGoals }) => {
  const gameDate = new Date(date ?? 0);

  return (
    <>
      <div className="w-[100px] text-left" id="time-container">
        {`${String(gameDate.getDate()).padStart(2, "0")}.${String(gameDate.getMonth()).padStart(
          2,
          "0"
        )}.${gameDate.getFullYear()}`}{" "}
        <br></br>
        {`${gameDate.getHours()}:${gameDate.getUTCMinutes() == 0 ? "00" : gameDate.getUTCMinutes()}`}
      </div>
      <div className="text-left w-full" id="teams-container">
        <div className="flex flex-row gap-2 content-start items-center" id="team1-container">
          {homeTeam?.logoUrl ? (
            <img src={homeTeam.logoUrl} alt={homeTeam.name} className="size-5 rounded-sm p-[1px] bg-white" />
          ) : (
            <img src={defaultCrest} alt="Herb" className="w-5 rounded-sm p-[1px]  bg-white" />
          )}

          {homeTeam?.name}
        </div>
        <div className="mt-2 flex flex-row gap-2 item-center" id="team2-container">
          {awayTeam?.logoUrl ? (
            <img src={awayTeam.logoUrl} alt={awayTeam.name} className="size-5 rounded-sm p-[1px]  bg-white" />
          ) : (
            <img src={defaultCrest} alt="Herb" className="w-5 rounded-sm p-[1px] bg-white" />
          )}
          {awayTeam?.name}
        </div>
      </div>
      <div className="flex flex-col gap-2 w-4 items-end">
        <div>{homeGoals ?? "TBD"}</div>
        <div>{awayGoals ?? "TBD"}</div>
      </div>
    </>
  );
};

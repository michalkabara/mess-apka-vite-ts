import defaultCrest from "../img/crest_default.svg";

export const SingleGame: React.FC<{
  data: string | number | Date;
  homeTeam: string;
  homeTeamLogo: string;
  awayTeam: string;
  awayTeamLogo: string;
  homeGoals: string;
  awayGoals: string;
}> = ({ data, homeTeam, homeTeamLogo, awayTeam, awayTeamLogo, homeGoals, awayGoals }) => {
  const gameDate = new Date(data);

  return (
    <>
      <div className="w-[150px] text-left" id="time-container">
        {`${gameDate.getDate()}.${gameDate.getMonth()}.${gameDate.getFullYear()} ${gameDate.getHours()}:${
          gameDate.getUTCMinutes() == 0 ? "00" : gameDate.getUTCMinutes()
        }`}
      </div>
      <div className="text-left w-full" id="teams-container">
        <div className="flex flex-row gap-2 content-start items-center" id="team1-container">
          {homeTeamLogo ? (
            <img src={homeTeamLogo} alt={homeTeam} className="w-5" />
          ) : (
            <img src={defaultCrest} alt="Herb" className="w-5" />
          )}

          {homeTeam}
        </div>
        <div className="mt-2 flex flex-row gap-2 item-center" id="team2-container">
          {awayTeamLogo ? (
            <img src={awayTeamLogo} alt={awayTeam} className="w-5" />
          ) : (
            <img src={defaultCrest} alt="Herb" className="w-5" />
          )}
          {awayTeam}
        </div>
      </div>
      <div className=" flex flex-col gap-2">
        <div>{homeGoals}</div>
        <div>{awayGoals}</div>
      </div>
    </>
  );
};

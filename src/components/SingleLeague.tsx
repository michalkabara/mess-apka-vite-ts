import { LeagueHeader } from "./LeagueHeader";
import { SingleGame } from "./SingleGame";
import { Link } from "react-router-dom";
import { useFetchGamesGroupedByPeriod } from "../customHooks/useFetchGamesGroupedByPeriods";
import { useState } from "react";

export const SingleLeague: React.FC<{ subLeague: string; index: number }> = ({ subLeague, index }) => {
  const [isActive, setIsActive] = useState(true);

  const { isPending, error, data } = useFetchGamesGroupedByPeriod();

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>An error has occurred {error.message}</p>;

  const handleToggleSection = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="flex flex-col mb-2 gap-2">
      <LeagueHeader leagueName={subLeague} isActive={isActive} toggleSection={handleToggleSection} />

      <div data-section-name={index} className={`mecze mt-2 gap-2 flex flex-col text-xs ${!isActive && "hidden"}`}>
        {Object.keys(data)
          .reverse()
          .slice(0, 1)
          .map((period) => {
            return (
              <div key={period} className="flex flex-col gap-1">
                <div className="text-center">Kolejka {period}</div>
                {data[period].reverse().map((mecz: any, index: number) => (
                  <div key={`${mecz.MatchId}-${index}`} className="flex flex-col items-center">
                    <Link
                      to={`/game/${mecz.MatchId}`}
                      className="flex flex-row items-center w-full content-between hover:bg-zinc-700 rounded-md py-1 px-3 ease-in-out duration-500 gap-2"
                    >
                      <SingleGame
                        data={mecz.Date}
                        homeTeam={mecz.HomeTeamName}
                        homeTeamLogo={mecz.HomeTeamLogoUrl}
                        awayTeam={mecz.AwayTeamName}
                        awayTeamLogo={mecz.AwayTeamLogoUrl}
                        homeGoals={mecz.HomeGoals}
                        awayGoals={mecz.AwayGoals}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            );
          })}
      </div>
    </div>
  );
};

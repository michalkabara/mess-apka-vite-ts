import { LeagueHeader } from "./LeagueHeader";
import { SingleGame } from "./SingleGame";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useFetchLeagueGames } from "../customHooks/useFetchLeagueGames";

export const SingleLeague: React.FC<{ leagueId: string; subLeague: string; index: number }> = ({
  leagueId,
  subLeague,
  index,
}) => {
  const [isActive, setIsActive] = useState(true);

  const { isPending, error, data } = useFetchLeagueGames(leagueId);

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>An error has occurred {error.message}</p>;

  const handleToggleSection = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="flex flex-col mb-2 gap-2">
      <LeagueHeader
        leagueName={subLeague}
        isActive={isActive}
        leagueId={leagueId}
        isLinkEnabled={true}
        toggleSection={handleToggleSection}
      />

      <div data-section-name={index} className={`mecze mt-2 gap-2 flex flex-col text-xs ${!isActive && "hidden"}`}>
        {data.map((game) => (
          <div key={game.id} className="flex flex-col items-center">
            <Link
              to={`/game/${game.id}`}
              className="flex flex-row items-center w-full content-between hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md py-1 px-3 ease-in-out duration-500 gap-2"
            >
              <SingleGame
                date={game.date}
                homeTeam={game.homeTeam}
                awayTeam={game.awayTeam}
                homeGoals={game.homeGoals}
                awayGoals={game.awayGoals}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

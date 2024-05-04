import { Tooltip } from "react-tooltip";
import { useFetchTeamGames } from "../customHooks/useFetchTeamGames";
import { Link } from "react-router-dom";
import { Game } from "../types";

export const TeamForm: React.FC<{
  teamId?: string;
}> = ({ teamId }) => {
  const { isPending, error, data } = useFetchTeamGames(teamId);

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>An error has occurred {error.message}</p>;

  const games = data.data.slice(0, 5);

  console.log(data);

  return (
    <div className="flex flex-row gap-1 relative sm:min-w-[120px] w-auto justify-end">
      <div
        className="rounded-sm bg-gray-400 text-white size-4 text-center leading-tight cursor-default"
        data-tooltip-id="TBA"
        data-tooltip-content="TBA"
        data-tooltip-place="top"
      >
        ?
        <Tooltip id="TBA" />
      </div>

      {games.map((game: Game) => {
        // console.log(array);

        const gameDate = new Date(game.date ?? 0);

        const date = `${String(gameDate.getDate()).padStart(2, "0")}.${String(gameDate.getMonth()).padStart(
          2,
          "0"
        )}.${gameDate.getFullYear()}`;

        if (game.homeGoals === game.awayGoals) {
          return (
            <Link to={`/game/${game.id}`} key={`${game.id}-win`}>
              <div>
                <div
                  data-tooltip-id="tie-game"
                  data-tooltip-content={`${date} ${
                    game.homeTeamId == teamId ? game.awayTeam?.name : game.homeTeam?.name
                  }`}
                  data-tooltip-place="top"
                  className="rounded-sm bg-orange-500 text-white size-4 text-center relative flex justify-center leading-tight"
                >
                  R
                </div>
                <Tooltip id="tie-game" />
              </div>
            </Link>
          );
        }

        if (game.winnerId === teamId) {
          return (
            <Link to={`/game/${game.id}`} key={`${game.id}-win`}>
              <div>
                <div
                  data-tooltip-id="win-game"
                  data-tooltip-content={`${date} ${
                    game.homeTeamId == teamId ? game.awayTeam?.name : game.homeTeam?.name
                  }`}
                  data-tooltip-place="top"
                  className="rounded-sm bg-green-700 text-white size-4 text-center relative flex justify-center leading-tight"
                >
                  W
                </div>

                <Tooltip id="win-game" />
              </div>
            </Link>
          );
        }

        if (game.winnerId !== teamId) {
          return (
            <Link to={`/game/${game.id}`} key={`${game.id}-win`}>
              <div>
                <div
                  data-tooltip-id="lost-game"
                  data-tooltip-content={`${date} ${
                    game.homeTeamId == teamId ? game.awayTeam?.name : game.homeTeam?.name
                  }`}
                  data-tooltip-place="top"
                  className="rounded-sm bg-red-700 text-white size-4 text-center relative flex justify-center leading-tight"
                >
                  P
                </div>
                <Tooltip id="lost-game" />
              </div>
            </Link>
          );
        }
      })}
    </div>
  );
};

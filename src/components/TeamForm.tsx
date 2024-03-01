import { Tooltip } from "react-tooltip";
import { useFetchTeamGames } from "../customHooks/useFetchTeamGames";

export const TeamForm: React.FC<{
  teamId?: string;
}> = ({ teamId }) => {
  const { isPending, error, data } = useFetchTeamGames(teamId);

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>An error has occurred {error?.message}</p>;

  const games = data
    ?.filter((game) => game.homeTeamId === teamId || game.awayTeamId === teamId)
    .slice(0, 5)
    .reverse();

  return (
    <div className="flex flex-row gap-1 relative">
      <div
        className="rounded-sm bg-gray-400 text-white w-4 text-center"
        data-tooltip-id="TBA"
        data-tooltip-content="TBA"
        data-tooltip-place="top"
      >
        ?
        <Tooltip id="TBA" />
      </div>

      {games.map((game) => {
        const gameDate = new Date(game.date ?? 0);

        const date = `${String(gameDate.getDate()).padStart(2, "0")}.${String(gameDate.getMonth()).padStart(
          2,
          "0"
        )}.${gameDate.getFullYear()}`;

        if (game.homeGoals === game.awayGoals) {
          return (
            <div key={`${game.id}-tie`}>
              <div
                data-tooltip-id="tie-game"
                data-tooltip-content={`${date} ${
                  game.homeTeamId == teamId ? game.awayTeam?.name : game.homeTeam?.name
                }`}
                data-tooltip-place="top"
                className="rounded-sm bg-orange-500 text-white w-4 text-center relative flex justify-center"
              >
                R
              </div>
              <Tooltip id="tie-game" />
            </div>
          );
        }

        if (
          (game.homeTeamId === teamId && game.homeGoals! > game.awayGoals!) ||
          (game.awayTeamId === teamId && game.homeGoals! < game.awayGoals!)
        ) {
          return (
            <div key={`${game.id}-win`}>
              <div
                data-tooltip-id="win-game"
                data-tooltip-content={`${date} ${
                  game.homeTeamId == teamId ? game.awayTeam?.name : game.homeTeam?.name
                }`}
                data-tooltip-place="top"
                className="rounded-sm bg-green-700 text-white w-4 text-center relative flex justify-center"
              >
                W
              </div>

              <Tooltip id="win-game" />
            </div>
          );
        }

        if (
          (game.homeTeamId === teamId && game.homeGoals! < game.awayGoals!) ||
          (game.awayTeamId === teamId && game.homeGoals! > game.awayGoals!)
        ) {
          return (
            <div key={`${game.id}-lose`}>
              <div
                data-tooltip-id="lost-game"
                data-tooltip-content={`${date} ${
                  game.homeTeamId == teamId ? game.awayTeam?.name : game.homeTeam?.name
                }`}
                data-tooltip-place="top"
                className="rounded-sm bg-red-700 text-white w-4 text-center relative flex justify-center"
              >
                P
              </div>
              <Tooltip id="lost-game" />
            </div>
          );
        }
      })}
    </div>
  );
};

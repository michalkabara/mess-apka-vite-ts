import { Tooltip } from "react-tooltip";
import { gameType } from "../types";

export const TeamForm: React.FC<{
  teamId: number;
  gamesData: gameType[];
}> = ({ teamId, gamesData }) => {
  const games = gamesData
    .filter((game) => game.HomeTeamId === teamId || game.AwayTeamId === teamId)
    .slice(0, 5);

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
        const gameDate = new Date(game.Date);

        const date = `${gameDate.getDate()}.${gameDate.getMonth()}.${gameDate.getFullYear()}`;

        if (game.HomeGoals === game.AwayGoals) {
          return (
            <div key={game.MatchId}>
              <div
                data-tooltip-id="tie-game"
                data-tooltip-content={`${date} ${
                  game.HomeTeamId == teamId
                    ? game.AwayTeamName
                    : game.HomeTeamName
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
          (game.HomeTeamId === teamId && game.HomeGoals > game.AwayGoals) ||
          (game.AwayTeamId === teamId && game.HomeGoals < game.AwayGoals)
        ) {
          return (
            <div key={game.MatchId}>
              <div
                data-tooltip-id="win-game"
                data-tooltip-content={`${date} ${
                  game.HomeTeamId == teamId
                    ? game.AwayTeamName
                    : game.HomeTeamName
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
          (game.HomeTeamId === teamId && game.HomeGoals < game.AwayGoals) ||
          (game.AwayTeamId === teamId && game.HomeGoals > game.AwayGoals)
        ) {
          return (
            <div key={game.MatchId}>
              <div
                data-tooltip-id="lost-game"
                data-tooltip-content={`${date} ${
                  game.HomeTeamId == teamId
                    ? game.AwayTeamName
                    : game.HomeTeamName
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

import { Tooltip } from "react-tooltip";
import { useFetchTeamGames } from "../../customHooks/fetchTeamData/useFetchTeamGames";
import { Link } from "react-router-dom";
import { PartialGame } from "../../types/gameTypes";
import dayjs from "dayjs";

export const TeamForm: React.FC<{
  teamId?: string;
}> = ({ teamId }) => {
  const { isPending, error, data } = useFetchTeamGames(teamId);

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>An error has occurred {error.message}</p>;

  const games = data.data.slice(0, 5);

  const tbdGame = data.data.find((game) => game.isFinished === false);
  const tbdGameDate = dayjs(tbdGame?.date).format("DD.MM.YYYY HH:mm");

  return (
    <div className="flex flex-row gap-1 relative sm:min-w-[120px] w-auto justify-end">
      {tbdGame && (
        <Link to={`/game/${tbdGame.id}`} key={`${tbdGame.id}-win`}>
          <div
            className="rounded-sm bg-gray-400 text-white size-4 text-center leading-tight cursor-pointer"
            data-tooltip-id="TBA"
            data-tooltip-content={`${tbdGameDate} ${
              tbdGame.homeTeamId == teamId ? tbdGame.awayTeam?.name : tbdGame.homeTeam?.name
            }`}
            data-tooltip-place="top"
          >
            ?
            <Tooltip id="TBA" />
          </div>
        </Link>
      )}

      {games.map((game: PartialGame) => {
        // console.log(array);

        const gameDate = new Date(game.date ?? 0);

        const date = dayjs(gameDate).format("DD.MM.YYYY HH:mm");

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

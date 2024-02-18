import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFetchGames } from "../customHooks/useFetchGames";

export const GameDetails = () => {
  const { gameId } = useParams();
  const { isPending, error, data } = useFetchGames();

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>An error has occurred {error.message}</p>;

  const selectedGame = data.find(
    (game: { MatchId: string }) => game.MatchId === gameId
  );

  const gameDate = new Date(selectedGame.Date);

  return (
    <div className="flex items-center flex-col">
      <p>
        {gameDate.getDate()}.{gameDate.getMonth()}.{gameDate.getFullYear()}{" "}
        {gameDate.getHours()}:
        {gameDate.getUTCMinutes() == 0 ? "00" : gameDate.getUTCMinutes()}
      </p>

      <div className="grid grid-cols-3 mt-7 items-start">
        <Link to={`/team/${selectedGame.HomeTeamId}`}>
          <div className="flex flex-col text-center text-xs gap-3 items-center">
            <img
              src={selectedGame.HomeTeamLogoUrl}
              alt={selectedGame.HomeTeamName}
              className="w-28"
            />
            <p>{selectedGame.HomeTeamName}</p>
          </div>
        </Link>

        <span className="text-center font-bold text-nowrap text-xl flex justify-center h-full items-center">
          {selectedGame.HomeGoals} - {selectedGame.AwayGoals}
        </span>

        <Link to={`/team/${selectedGame.AwayTeamId}`}>
          <div className="flex flex-col text-center text-xs gap-3 items-center">
            <img
              src={selectedGame.AwayTeamLogoUrl}
              alt={selectedGame.AwayTeamName}
              className="w-28"
            />
            <p>{selectedGame.AwayTeamName}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

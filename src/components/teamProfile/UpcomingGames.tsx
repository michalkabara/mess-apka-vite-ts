import { Game } from "../../types/gameTypes";
import { Link } from "react-router-dom";
import { SingleGame } from "../ui/SingleGame";

export const UpcomingGames: React.FC<{ upcomingGames: Game[] }> = ({ upcomingGames }) => {
  return (
    <>
      {upcomingGames.map((game: Game, index: number) => (
        <Link
          to={`/game/${game.id}`}
          key={`${game.id}-${index}`}
          className={`flex flex-row items-center w-full content-between border-zinc-200 border dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-md py-3 px-3 pr-4 ease-in-out duration-500 gap-2 bg-gradient-to-l to-[1%] relative overflow-clip`}
        >
          <SingleGame
            date={game.date}
            homeTeam={game.homeTeam}
            awayTeam={game.awayTeam}
            homeGoals={game.homeGoals}
            awayGoals={game.awayGoals}
          />
        </Link>
      ))}
    </>
  );
};

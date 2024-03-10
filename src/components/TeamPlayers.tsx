import { Link } from "react-router-dom";
import defaultPlayer from "../img/default_player.png";
import { Player } from "../types";

export const TeamPlayers: React.FC<{
  team: Player[];
}> = ({ team }) => {
  return (
    <>
      <div className="flex flex-row items-center gap-4 py-2 px-3">
        <div className="w-9"></div>
        <div className="w-32">Imię i Nazwisko</div>
        <div className="w-9 flex justify-center">numer</div>
        <div className="w-9 flex justify-center">wiek</div>
        <div className="w-9 flex justify-center">noga</div>
      </div>
      {team.map((player) => (
        <Link
          to={`/player/${player.id}`}
          className={`rounded-lg ${
            player.isGoalKeeper
              ? "bg-green-600 text-zinc-100 dark:bg-green-800 order-2"
              : player.isCaptain
              ? "bg-yellow-600 text-zinc-100 dark:bg-yellow-700 order-1"
              : "bg-zinc-100 text-zinc-800 dark:text-zinc-100 dark:bg-zinc-700 order-3"
          } `}
        >
          <div key={player.id} className={`flex flex-row items-center gap-4 py-2 px-3 rounded-lg`}>
            <div>
              <img className="w-6" src={defaultPlayer} alt="default player" />
            </div>

            <div className="w-32">
              {/* {player.isCaptain && <span>C.</span>}
              {player.isGoalKeeper && <span>B.</span>}  */}
              {player.name}
            </div>
            <div className="w-9 flex justify-center">{player.number}</div>
            <div className="w-9 flex justify-center">wiek</div>
            <div className="w-9 flex justify-center">noga</div>
          </div>
        </Link>
      ))}
    </>
  );
};

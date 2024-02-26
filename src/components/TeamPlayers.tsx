import defaultPlayer from "../img/default_player.png";
import { TeamPlayersType } from "../types";

export const TeamPlayers: React.FC<{
  team: TeamPlayersType[];
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
        <div
          key={`${player.name}-${player.surname}`}
          className={`flex flex-row items-center gap-4 py-2 px-3 ${
            player.isGoalKeeper
              ? "bg-green-600 text-zinc-100 dark:bg-green-800 order-2"
              : player.isCaptain
              ? "bg-yellow-600 text-zinc-100 dark:bg-yellow-700 order-1"
              : "bg-zinc-100 text-zinc-800 dark:text-zinc-100 dark:bg-zinc-700 order-3"
          } rounded-lg`}
        >
          <div>
            <img className="w-9" src={defaultPlayer} alt="default player" />
          </div>

          <div className="w-32">
            {player.isCaptain && <span>C.</span>}
            {player.isGoalKeeper && <span>B.</span>} {player.name} {player.surname}
          </div>
          <div className="w-9 flex justify-center">{player.number}</div>
          <div className="w-9 flex justify-center">{player.age}</div>
          <div className="w-9 flex justify-center">{player.mainLeg}</div>
        </div>
      ))}
    </>
  );
};

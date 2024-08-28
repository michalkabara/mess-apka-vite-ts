import { Link } from "react-router-dom";
import defaultPlayer from "../../img/default_player.png";
import { Player } from "../../types";

export const GameDetailsPlayers: React.FC<{
  homeTeamPlayers: Player[] | undefined;
  awayTeamPlayers: Player[] | undefined;
  referees: string[];
}> = ({ homeTeamPlayers, awayTeamPlayers, referees }) => {
  console.log(referees);

  return (
    <div className="w-full mt-5 flex flex-col items-center text-xs">
      <h3 className="text-center uppercase text-xs">sklady wyjsciowe</h3>
      <div className="mt-5 flex flex-row gap-4 md:gap-10">
        <div className="flex flex-col text-right border-1 border-zinc-200 gap-2 ">
          {homeTeamPlayers?.map((player) => (
            <Link key={player.id} to={`/player/${player.id}`}>
              <div className="flex flex-row gap-2 justify-end items-center">
                <p>{player.name}</p>
                <img className="size-5" src={defaultPlayer} alt={player.name} />
              </div>
            </Link>
          ))}
        </div>
        <div className="w-1 border-3 border-zinc-700 border-s-[1px]"></div>
        <div className="flex flex-col text-left gap-2">
          {awayTeamPlayers?.map((player) => (
            <Link key={player.id} to={`/player/${player.id}`}>
              <div className="flex flex-row gap-2 justify-start items-center">
                <img className="size-5" src={defaultPlayer} alt={player.name} />
                <p>{player.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {referees[0] !== null ? (
        <>
          <h3 className="mt-5 text-center uppercase text-xs">Sędziowie</h3>
          <div className="mt-5 flex flex-row w-full justify-center gap-10">
            <div className="flex flex-col border-1 border-zinc-200 items-center gap-2">
              {referees.map((referee) => (
                <div key={referee} className="flex flex-row gap-2 justify-end">
                  <p>{referee}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

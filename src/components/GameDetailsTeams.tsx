import { Link } from "react-router-dom";
import defaultPlayer from "../img/default_player.png";
import { useFecthTeamPlayers } from "../customHooks/useFetchTeamPlayers";

export const GameDetailsTeams: React.FC<{ homeTeamId: string | undefined; awayTeamId: string | undefined }> = ({
  homeTeamId,
  awayTeamId,
}) => {
  const {
    isPending: homePlayersPending,
    error: homePlayersError,
    data: homePlayersData,
  } = useFecthTeamPlayers(homeTeamId);
  const {
    isPending: awayPlayersPending,
    error: awayPlayersError,
    data: awayPlayersData,
  } = useFecthTeamPlayers(awayTeamId);

  if (homePlayersPending || awayPlayersPending) return <p>Loading...</p>;

  if (homePlayersError ?? awayPlayersError) return <p>An error has occurred {homePlayersError?.message}</p>;

  return (
    <div className="w-full mt-5 text-sm">
      <h3 className="text-center uppercase text-xs">sklady wyjsciowe</h3>
      <div className="mt-5 flex flex-row w-full justify-center gap-4 md:gap-10">
        <div className="flex flex-col text-right border-1 border-zinc-200 gap-2 ">
          {homePlayersData.map((player) => (
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
          {awayPlayersData.map((player) => (
            <Link key={player.id} to={`/player/${player.id}`}>
              <div className="flex flex-row gap-2 justify-start items-center">
                <img className="size-5" src={defaultPlayer} alt={player.name} />
                <p>{player.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <h3 className="mt-5 text-center uppercase text-xs">Trenerzy</h3>
      <div className="mt-5 flex flex-row w-full justify-center gap-10">
        <div className="flex flex-col text-right border-1 border-zinc-200 gap-1">
          {/* {data.slice(0, 1).map((player) => (
            <div className="flex flex-row gap-2 justify-end">
              <p>{player}</p>
              <img className="w-5" src={defaultPlayer} alt={player} />
            </div>
          ))} */}
        </div>
        <div className="w-1 border-3 border-zinc-700 border-s-[1px]"></div>
        <div className="flex flex-col text-left gap-1">
          {/* {data.slice(0, 1).map((player) => (
            <div key={player} className="flex flex-row gap-2 justify-start">
              <img className="w-5" src={defaultPlayer} alt={player} />
              <p>{player}</p>
            </div>
          ))} */}
        </div>
      </div>
      <h3 className="mt-5 text-center uppercase text-xs">Sędziowie</h3>
      <div className="mt-5 flex flex-row w-full justify-center gap-10">
        <div className="flex flex-col text-right border-1 border-zinc-200 gap-1">
          {/* {data.slice(0, 1).map((player) => (
            <div key={player} className="flex flex-row gap-2 justify-end">
              <p>{player}</p>
              <img className="w-5" src={defaultPlayer} alt={player} />
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

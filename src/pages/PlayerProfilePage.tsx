import defaultPlayer from "../img/default_player.png";
import { useFetchPlayerData } from "../customHooks/useFetchPlayerData";
import { useFetchTeamData } from "../customHooks/useFetchTeamData";
import { Link, useParams } from "react-router-dom";
import { useFetchTeamGames } from "../customHooks/useFetchTeamGames";
import { SingleGame } from "../components/SingleGame";

export const PlayerProfilePage: React.FC = () => {
  const { playerId } = useParams();

  const { isPending, error, data } = useFetchPlayerData(playerId);

  console.log(data);

  const { isPending: isTeamPending, error: teamError, data: teamData } = useFetchTeamData(data?.teamId);

  const { isPending: isTeamGamesPending, error: teamGamesError, data: teamGamesData } = useFetchTeamGames(data?.teamId);

  if (isPending || isTeamPending || isTeamGamesPending) return <p>Loading...</p>;

  if (error ?? teamError ?? teamGamesError) return <p>An error has occurred {error?.message}</p>;

  // const playerGames = teamGamesData.data.filter(
  //   (game) =>
  //     game.homePlayers?.some((player) => player.id === playerId) ??
  //     game.awayPlayers?.some((player) => player.id === playerId)
  // );

  // console.log(playerGames);

  return (
    <>
      <div className="flex flex-row text-sm gap-5">
        <img className="size-36" src={defaultPlayer} alt={data.name} />
        <div className="flex flex-col gap-1 text-xs">
          <p className="text-xl font-bold">{data.name}</p>
          <p>
            <span className="font-extrabold">Kraj:</span> Polska Flaga
          </p>
          <p>
            <span className="font-extrabold">Wiek:</span> 21
          </p>
          <p>
            <span className="font-extrabold">Klub:</span> {teamData.name}
          </p>
          <p>
            <span className="font-extrabold">Pozycja:</span> {data.roles}
          </p>
        </div>
      </div>

      <div>
        <div id="statystyki" className="mt-5">
          <h2 className="text-xs uppercase py-3 border-b-[1px] border-zinc-600">Statystyki</h2>
          <div className="flex flex-row gap-3 mt-3">
            <div className="flex flex-col items-start gap-1">
              <label htmlFor="" className="text-xs">
                Sezon
              </label>
              <select name="" id="" className="py-1 px-2 rounded-md text-xs">
                <option value="">2023/2024</option>
              </select>
            </div>

            <div className="flex flex-col items-start gap-1">
              <label htmlFor="" className="text-xs">
                Liga
              </label>
              <select name="" id="" className="py-1 px-2 rounded-md text-xs">
                <option value="">Klasa okręgowa</option>
              </select>
            </div>
          </div>
          <div className="flex flex-row gap-5 justify-between mt-2 bg-zinc-800 px-4 py-3 rounded-lg">
            <div className="flex flex-col items-center">
              <p className="text-xs">Występy</p>
              <span className="text-4xl font-medium">8</span>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xs">Gole</p>
              <span className="text-4xl font-medium">0</span>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xs">Wygrane</p>
              <span className="text-4xl font-medium">4</span>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xs">Zremisowane</p>
              <span className="text-4xl font-medium">1</span>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xs">Porażki</p>
              <span className="text-4xl font-medium">3</span>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xs">Minuty na boisku</p>
              <span className="text-4xl font-medium">653</span>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xs">Czerwone kartki</p>
              <span className="text-4xl font-medium">0</span>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xs">Żółte kartki</p>
              <span className="text-4xl font-medium">1</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xs uppercase py-3 border-b-[1px] border-zinc-600">Kariera</h2>
      </div>
      <div>
        <h2 className="text-xs uppercase py-3 border-b-[1px] border-zinc-600">Ostatnie mecze</h2>

        {/* {playerGames.map((game) => (
          <div key={game.id} className="flex flex-col items-center">
            <Link
              to={`/game/${game.id}`}
              className="flex flex-row items-center w-full content-between hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md py-[5px] px-4 ease-in-out duration-500 gap-2"
            >
              <SingleGame
                date={game.date}
                homeTeam={game.homeTeam}
                awayTeam={game.awayTeam}
                homeGoals={game.homeGoals}
                awayGoals={game.awayGoals}
              />
            </Link>
          </div>
        ))} */}
      </div>
    </>
  );
};

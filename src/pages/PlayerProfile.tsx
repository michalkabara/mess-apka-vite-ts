import { useFetchPlayerData } from "../customHooks/useFetchPlayerData";
import { useParams } from "react-router-dom";
import { useFetchTeamGames } from "../customHooks/fetchTeamData/useFetchTeamGames";
import { PlayerStats } from "../components/playerProfile/PlayerStats";
import { FC } from "react";
import { PlayerInfo } from "../components/playerProfile/PlayerInfo";
import { GameLinkWithOutcomeColor } from "../components/ui/GameLinkWithOutcomeColor";
import { useFetchPlayerGames } from "../customHooks/useFetchPlayerGames";
import { Game } from "../types/gameTypes";
import { useFetchSeasons } from "../customHooks/useFetchSeasons";

export const PlayerProfile: FC = () => {
  const { playerId } = useParams();
  const { isPending, error, data } = useFetchPlayerData(playerId);
  // const { isPending: isTeamPending, error: teamError, data: teamData } = useFetchTeamData(data?.team.id);
  const { isPending: playerGamesPending, error: playerGamesError, data: playerGames } = useFetchPlayerGames(playerId);
  const { isPending: teamGamesPending, error: teamGamesError, data: teamGamesData } = useFetchTeamGames(data?.team.id);
  const { isPending: seasonsPending, error: seasonsError, data: seasonsData } = useFetchSeasons();

  if (isPending || playerGamesPending || teamGamesPending || seasonsPending) return <p>Loading...</p>;
  if (error ?? playerGamesError ?? teamGamesError ?? seasonsError) return <p>An error has occurred {error?.message}</p>;

  // const playerHomeGames = teamGamesData.data.filter((game) =>
  //   game.homePlayers?.find((player) => player.name === data.name)
  // );

  // const playerAwayGames = teamGamesData.data.filter((game) =>
  //   game.awayPlayers?.find((player) => player.name === data.name)
  // );

  // const playerGames = [...playerHomeGames, ...playerAwayGames].sort((a, b) => {
  //   let da = new Date(a.date);
  //   let db = new Date(b.date);
  //   return db - da;
  // });

  return (
    <>
      <PlayerInfo photoUrl={data.photoUrl} name={data.name} roles={data.roles} number={data.number} team={data.team} />

      <div>
        <div id="statystyki" className="mt-5">
          <h2 className="text-xs uppercase py-3 border-b-[1px] border-zinc-600">Statystyki</h2>
          {/* <div className="flex flex-row gap-3 mt-3">
            <div className="flex flex-col items-start gap-1">
              <label htmlFor="" className="text-xs">
                Sezon
              </label>
              <select name="" id="" className="py-1 px-2 rounded-md text-xs bg-zinc-200 dark:bg-zinc-800">
                {seasonsData.map((season: string) => (
                  <option key={season} value={season}>
                    {season}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col items-start gap-1">
              <label htmlFor="" className="text-xs">
                Liga
              </label>
              <select name="" id="" className="py-1 px-2 rounded-md text-xs  bg-zinc-200 dark:bg-zinc-800">
                <option value="">Klasa okręgowa</option>
              </select>
            </div>
          </div> */}
          <PlayerStats player={data} />
        </div>
      </div>

      <div>
        <h2 className="text-xs uppercase py-3 border-b-[1px] border-zinc-600">Kariera</h2>
      </div>
      <div>
        <h2 className="text-xs uppercase py-3 border-b-[1px] border-zinc-600">Ostatnie mecze</h2>
        <div
          className={`mecze mt-2 flex flex-col gap-1 text-xs relative transition-all duration-500 ease-in-out overflow-hidden`}
        >
          {playerGames
            .map((game) => {
              const teamGamesFiltered = teamGamesData.data.find((teamGame: Game) => teamGame.id === game.matchId);
              return teamGamesFiltered;
            })
            .map((game, index) => {
              if (game)
                return (
                  <div key={game?.id} className="flex flex-col items-center">
                    <GameLinkWithOutcomeColor game={game} index={index} winnerId={data?.team.id} />
                  </div>
                );
            })}
        </div>
      </div>
    </>
  );
};

import { useFetchPlayerData } from "../customHooks/useFetchPlayerData";
import { useFetchTeamData } from "../customHooks/fetchTeamData/useFetchTeamData";
import { useParams } from "react-router-dom";
import { useFetchTeamGames } from "../customHooks/fetchTeamData/useFetchTeamGames";
import { PlayerStats } from "../components/playerProfile/PlayerStats";
import { FC } from "react";
import { PlayerInfo } from "../components/playerProfile/PlayerInfo";

export const PlayerProfile: FC = () => {
  const { playerId } = useParams();

  const { isPending, error, data } = useFetchPlayerData(playerId);

  const { isPending: isTeamPending, error: teamError, data: teamData } = useFetchTeamData(data?.teamId);

  const { isPending: isTeamGamesPending, error: teamGamesError, data: teamGamesData } = useFetchTeamGames(data?.teamId);

  if (isPending || isTeamPending || isTeamGamesPending) return <p>Loading...</p>;

  if (error ?? teamError ?? teamGamesError) return <p>An error has occurred {error?.message}</p>;

  return (
    <>
      <PlayerInfo photoUrl={data.photoUrl} name={data.name} roles={data.roles} number={data.number} team={data.team} />

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
          <PlayerStats />
        </div>
      </div>

      <div>
        <h2 className="text-xs uppercase py-3 border-b-[1px] border-zinc-600">Kariera</h2>
      </div>
      <div>
        <h2 className="text-xs uppercase py-3 border-b-[1px] border-zinc-600">Ostatnie mecze</h2>
      </div>
    </>
  );
};

import { useParams } from "react-router-dom";
import { SingleLeague } from "../components/generic/SingleLeague";
import { useFetchLeagues } from "../customHooks/fetchLeagueData/useFetchLeagues";
import { useEffect, useState } from "react";
import { League } from "../types/leagueTypes";
import { SingleTab } from "../components/generic/SingleTab";

export const VoivodeshipProfile: React.FC = () => {
  const { voivodeId } = useParams();
  const [selectedLeagueId, setSelectedLeagueId] = useState("");
  const { isPending, error, data } = useFetchLeagues();

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>An error has occurred {error.message}</p>;

  const voivodeRegions = data?.find((voivode) => voivode.id === voivodeId);

  const filteredData = voivodeRegions?.childLeagues.find((league) => league.id === selectedLeagueId);

  useEffect(() => {
    setSelectedLeagueId(voivodeRegions?.childLeagues[1].id);
  }, []);

  return (
    <>
      <p className="text-center border-zinc-600 border-b-[1px] pb-3 uppercase text-sm">{voivodeRegions?.name}</p>
      <div className="flex flex-row w-full gap-3 mt-5">
        {voivodeRegions?.childLeagues.map((league: League) => {
          if (league.childLeagues.length > 2) {
            return (
              // <button
              //   onClick={() => {
              //     setSelectedLeagueId(league.id);
              //   }}
              //   key={league.id}
              //   className={`uppercase text-xs text-center  py-2 px-3 rounded-md  ${
              //     selectedLeagueId === league.id
              //       ? "dark:bg-cyan-800 dark:hover:bg-cyan-700"
              //       : "dark:hover:bg-zinc-500 dark:bg-zinc-600"
              //   }`}
              // >
              //   {league.name.split("-")[0]}
              // </button>
              <SingleTab
                buttonText={league.name.split("-")[0]}
                onClick={() => setSelectedLeagueId(league.id)}
                key={league.id}
                selectedTab={selectedLeagueId}
                index={league.id}
              />
            );
          }
        })}
      </div>
      <div className="mt-5">
        {filteredData?.childLeagues.map((childLeague, index) => {
          return (
            <SingleLeague key={childLeague.id} leagueId={childLeague.id} subLeague={childLeague.name} index={index} />
          );
        })}
      </div>
    </>
  );
};

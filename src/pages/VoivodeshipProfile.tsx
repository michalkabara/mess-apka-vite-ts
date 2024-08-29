import { useParams } from "react-router-dom";
import { ChildLeague } from "../components/generic/ChildLeague";
import { useFetchLeagues } from "../customHooks/fetchLeagueData/useFetchLeagues";
import { useState } from "react";
import { League } from "../types/leagueTypes";
import { SingleTab } from "../components/generic/SingleTab";
import PageTitle from "../components/generic/PageTitle";

export const VoivodeshipProfile: React.FC = () => {
  const { voivodeId } = useParams();
  const [selectedLeagueId, setSelectedLeagueId] = useState("");
  const { isPending, error, data } = useFetchLeagues();

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>An error has occurred {error.message}</p>;

  const voivodeRegions = data?.find((voivode) => voivode.id === voivodeId);

  const filteredData = voivodeRegions?.childLeagues.find((league) => league.id === selectedLeagueId);

  // useEffect(() => {
  //   setSelectedLeagueId(voivodeRegions?.childLeagues[1].id);
  // }, []);

  return (
    <>
      <PageTitle title={`HotScore - ${voivodeRegions?.name}`} />
      <img src={voivodeRegions?.logoUrl} alt="" className="size-32 m-auto mb-5" />
      <p className="text-center border-zinc-600 border-b-[1px] pb-3 uppercase text-sm">{voivodeRegions?.name}</p>
      <div className="flex sm:flex-row w-full gap-3 mt-5 flex-col justify-center">
        {voivodeRegions?.childLeagues.map((league: League) => {
          return (
            <SingleTab
              buttonText={league.name.split("-")[0]}
              onClick={() => setSelectedLeagueId(league.id)}
              key={league.id}
              selectedTab={selectedLeagueId}
              index={league.id}
            />
          );
        })}
      </div>
      <div className="mt-5">
        {filteredData?.childLeagues.map((childLeague, index) => {
          return (
            <ChildLeague key={childLeague.id} leagueId={childLeague.id} subLeague={childLeague.name} index={index} />
          );
        })}
      </div>
    </>
  );
};

import { useEffect, useState } from "react";
import { useFetchLeagues } from "../../customHooks/fetchLeagueData/useFetchLeagues";
import { League } from "../../types/leagueTypes";
import { VoivodeTabs } from "./VoivodeTabs";
import { ChildLeague } from "../generic/ChildLeague";

export const VoivodeChildLeagues = () => {
  const { isPending, isSuccess, error, data } = useFetchLeagues();
  const [selectedLeague, setSelectedLeague] = useState<League | undefined>();

  useEffect(() => {
    if (isSuccess) {
      setSelectedLeague(data?.[5].childLeagues[3]);
    }
  }, [isSuccess, data]);

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>An error has occurred {error.message}</p>;

  let filterVoivode: League | undefined;

  const childLeaguesOrder = [
    data?.[5].childLeagues[0],
    data?.[5].childLeagues[4],
    data?.[5].childLeagues[3],
    data?.[5].childLeagues[1],
    data?.[5].childLeagues[2],
  ];

  const handleChangeChildLeague = (id: string | undefined) => {
    filterVoivode = data?.[5].childLeagues.find((league) => league.id === id);
    setSelectedLeague(filterVoivode);
  };

  return (
    <>
      <VoivodeTabs
        childLeagues={childLeaguesOrder}
        onClick={handleChangeChildLeague}
        selectedLeagueId={selectedLeague?.id}
      />
      <div className="mt-3 gap-3 flex flex-col">
        {selectedLeague?.childLeagues.map((childLeague, index) => (
          <ChildLeague key={childLeague.id} leagueId={childLeague.id} subLeague={childLeague.name} index={index} />
        ))}
      </div>
    </>
  );
};

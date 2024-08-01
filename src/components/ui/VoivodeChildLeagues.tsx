import { useEffect, useState } from "react";
import { useFetchLeagues } from "../../customHooks/fetchLeagueData/useFetchLeagues";
import { League } from "../../types/leagueTypes";
import { VoivodeTabs } from "./VoivodeTabs";
import { ChildLeague } from "../generic/ChildLeague";
import { useFavouriteLeaguesContext } from "../../customHooks/useFavouriteLeaguesContext";

export const VoivodeChildLeagues = () => {
  const { isPending, isSuccess, error, data } = useFetchLeagues();
  const [selectedLeague, setSelectedLeague] = useState<League | undefined>();
  const { favouriteLeagues } = useFavouriteLeaguesContext();

  console.log(favouriteLeagues);

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
      <h3 className="text-center mb-5">{data?.[5]?.name}</h3>
      <VoivodeTabs
        childLeagues={childLeaguesOrder}
        onClick={handleChangeChildLeague}
        selectedLeagueId={selectedLeague?.id}
      />
      <div className="mt-4 gap-1 flex flex-col">
        {selectedLeague?.childLeagues.map((childLeague, index) => {
          if (favouriteLeagues.find((league) => league.id === childLeague.id)) {
            return (
              <ChildLeague
                order={0}
                isExpanded={true}
                key={childLeague.id}
                leagueId={childLeague.id}
                subLeague={childLeague.name}
                index={index}
              />
            );
          } else {
            return (
              <ChildLeague
                order={2}
                isExpanded={false}
                key={childLeague.id}
                leagueId={childLeague.id}
                subLeague={childLeague.name}
                index={index}
              />
            );
          }
        })}
      </div>
    </>
  );
};

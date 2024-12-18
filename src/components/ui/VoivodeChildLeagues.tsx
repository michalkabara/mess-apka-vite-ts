import { useEffect, useState } from "react";
import { useFetchLeagues } from "../../customHooks/fetchLeagueData/useFetchLeagues";
import { League } from "../../types/leagueTypes";
import { VoivodeTabs } from "./VoivodeTabs";
import { ChildLeague } from "../generic/ChildLeague";
import { useFavouriteLeaguesContext } from "../../customHooks/useFavouriteLeaguesContext";

export const VoivodeChildLeagues: React.FC<{ defualtVoivodeId: string }> = ({ defualtVoivodeId }) => {
  const { isPending, isSuccess, error, data } = useFetchLeagues();
  const [selectedLeague, setSelectedLeague] = useState<League | undefined>();
  const { favouriteLeagues } = useFavouriteLeaguesContext();

  const voivodeRegions = data?.find((voivode) => voivode.id === defualtVoivodeId);

  useEffect(() => {
    if (isSuccess) {
      setSelectedLeague(voivodeRegions?.childLeagues[0]);
    }
  }, [isSuccess, data]);

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>An error has occurred {error.message}</p>;

  let filterVoivode: League | undefined;

  const handleChangeChildLeague = (id: string | undefined) => {
    filterVoivode = voivodeRegions?.childLeagues.find((league) => league.id === id);
    setSelectedLeague(filterVoivode);
  };

  return (
    <>
      <h3 className="text-center mb-5 flex items-center gap-2 justify-center">
        <img src={voivodeRegions?.logoUrl} alt={voivodeRegions?.name} className="size-5" /> {voivodeRegions?.name}
      </h3>
      <VoivodeTabs
        childLeagues={voivodeRegions?.childLeagues}
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

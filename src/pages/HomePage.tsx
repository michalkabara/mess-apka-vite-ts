import { SingleLeague } from "../components/generic/SingleLeague";
import { useFetchLeagues } from "../customHooks/fetchLeagueData/useFetchLeagues";
import { FC, useEffect, useState } from "react";
import { League } from "../types";

import { HomePageBlog } from "../components/generic/HomePageBlog";

export const HomePage: FC = () => {
  const { isPending, error, data } = useFetchLeagues();

  const [selectedLeague, setSelectedLeagpue] = useState<League | undefined>();

  useEffect(() => {
    setSelectedLeagpue(data?.[5].childLeagues[2]);
  }, []);

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
    setSelectedLeagpue(filterVoivode);
  };

  return (
    <>
      <div className="max-md:hidden">
        <HomePageBlog></HomePageBlog>
      </div>

      <hr className="mt-4 border-zinc-700"></hr>
      <div className="flex sm:flex-row w-full gap-3 mt-4 flex-col">
        {childLeaguesOrder.map((league) => (
          <button
            key={league?.id}
            onClick={() => handleChangeChildLeague(league?.id)}
            className={`text-xs font-medium text-center py-2 px-3 rounded-md transition-all duration-300 ${
              selectedLeague?.id === league?.id
                ? "dark:bg-[#ed4535] dark:hover:bg-[##d63c2e] bg-[#ed4535] text-white"
                : "dark:hover:bg-zinc-800 dark:bg-zinc-900 dark:border dark:border-zinc-700 border-zinc-300 border hover:bg-zinc-200"
            }`}
          >
            {league?.name.split("-")[0]}
          </button>
        ))}
      </div>
      <div className="mt-3">
        {selectedLeague?.childLeagues.map((childLeague, index) => (
          <SingleLeague key={childLeague.id} leagueId={childLeague.id} subLeague={childLeague.name} index={index} />
        ))}
      </div>
    </>
  );
};

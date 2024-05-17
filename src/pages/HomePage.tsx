import { SingleLeague } from "../components/generic/SingleLeague";
import { useFetchLeagues } from "../customHooks/fetchLeagueData/useFetchLeagues";
import { FC, useEffect, useState } from "react";
import { League } from "../types";

import { HomePageBlog } from "../components/generic/HomePageBlog";

export const HomePage: FC = () => {
  const { isPending, error, data } = useFetchLeagues();

  const [filteredData, setFilteredData] = useState<League | undefined>();
  const [defaultVoivode, setDefaultVoivode] = useState<League | undefined>();
  const [selectedLeague, setSelectedLeague] = useState<string | undefined>("");

  // const favouriteLeagues = useContext(FavouriteLeaguesContext);

  useEffect(() => {
    setDefaultVoivode(data?.[5]);
    const filterVoivode = defaultVoivode?.childLeagues.find((league) => league.id === selectedLeague);
    setFilteredData(filterVoivode);
    setSelectedLeague(defaultVoivode?.childLeagues[2].id);
  }, [data, defaultVoivode?.childLeagues, selectedLeague]);

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>An error has occurred {error.message}</p>;

  // const child = data[0];
  // const filteredData = child.childLeagues.find((league) => league.id === selectedLeague);

  return (
    <>
      <div className="max-md:hidden">
        <HomePageBlog></HomePageBlog>
      </div>

      <hr className="mt-4 border-zinc-700"></hr>
      <div className="flex sm:flex-row w-full gap-3 mt-4 flex-col">
        {defaultVoivode?.childLeagues.map((league) => (
          <button
            onClick={() => {
              setSelectedLeague(league.id);
            }}
            key={league.id}
            className={`text-xs font-medium text-center py-2 px-3 rounded-md transition-all duration-300 ${
              selectedLeague === league.id
                ? "dark:bg-[#ed4535] dark:hover:bg-[##d63c2e]"
                : "dark:hover:bg-zinc-800 dark:bg-zinc-900 dark:border dark:border-zinc-700"
            }`}
          >
            {league.name.split("-")[0]}
          </button>
        ))}
      </div>
      <div className="mt-3">
        {filteredData?.childLeagues.map((childLeague, index) => (
          <SingleLeague key={childLeague.id} leagueId={childLeague.id} subLeague={childLeague.name} index={index} />
        ))}
      </div>
    </>
  );
};

import { SingleLeague } from "../components/SingleLeague";
import { useFetchLeagues } from "../customHooks/useFetchLeagues";
import { useEffect, useState } from "react";
import { League } from "../types";

import { HomePageBlog } from "../components/HomePageBlog";

export const HomePage: React.FC = () => {
  const [filteredData, setFilteredData] = useState<League | undefined>();
  const [defaultVoivode, setDefaultVoivode] = useState<League | undefined>();
  const [selectedLeague, setSelectedLeague] = useState<string | undefined>("");

  // const favouriteLeagues = useContext(FavouriteLeaguesContext);

  const { isPending, error, data } = useFetchLeagues();

  useEffect(() => {
    setDefaultVoivode(data?.[5]);
    const filterVoivode = defaultVoivode?.childLeagues.find((league) => league.id === selectedLeague);
    setFilteredData(filterVoivode);
    // setSelectedLeague(defaultVoivode?.childLeagues[0].id);
  }, [data, defaultVoivode?.childLeagues, selectedLeague]);

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>An error has occurred {error.message}</p>;

  // const child = data[0];
  // const filteredData = child.childLeagues.find((league) => league.id === selectedLeague);

  return (
    <>
      <HomePageBlog></HomePageBlog>
      <hr className="mt-5 border-zinc-600"></hr>
      <div className="flex sm:flex-row w-full gap-3 mt-5 flex-col">
        {defaultVoivode?.childLeagues.map((league) => (
          <button
            onClick={() => {
              setSelectedLeague(league.id);
            }}
            key={league.id}
            className={`uppercase text-xs text-center  py-2 px-3 rounded-md  ${
              selectedLeague === league.id
                ? "dark:bg-cyan-800 dark:hover:bg-cyan-700"
                : "dark:hover:bg-zinc-500 dark:bg-zinc-600"
            }`}
          >
            {league.name.split("-")[0]}
          </button>
        ))}
      </div>
      <div className="mt-5">
        {filteredData?.childLeagues.map((childLeague, index) => (
          <SingleLeague key={childLeague.id} leagueId={childLeague.id} subLeague={childLeague.name} index={index} />
        ))}
      </div>
    </>
  );
};

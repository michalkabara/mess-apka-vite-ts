import { SingleLeague } from "../components/SingleLeague";
import { useFetchLeagues } from "../customHooks/useFetchLeagues";
import { useState } from "react";

export const HomePage: React.FC = () => {
  const { isPending, error, data } = useFetchLeagues();

  const [selectedLeague, setSelectedLeague] = useState("");

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>An error has occurred {error.message}</p>;

  const child = data[0];

  const filteredData = child.childLeagues.find((league) => league.id === selectedLeague);

  return (
    <>
      <div className="flex flex-row w-full gap-3">
        {child.childLeagues.map((league) => (
          <button
            onClick={() => {
              setSelectedLeague(league.id);
            }}
            key={league.id}
            className={`uppercase text-xs text-center dark:bg-zinc-600 py-2 px-3 rounded-md  ${
              selectedLeague === league.id ? "dark:bg-cyan-800 dark:hover:bg-cyan-700" : "dark:hover:bg-zinc-500"
            }`}
          >
            {league.name}
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

{
}

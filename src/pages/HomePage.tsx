import { SingleLeague } from "../components/SingleLeague";
import { useFetchLeagues } from "../customHooks/useFetchLeagues";
import { League } from "../types";

export const HomePage: React.FC = () => {
  const { isPending, error, data } = useFetchLeagues();

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>An error has occurred {error.message}</p>;

  return (
    <>
      {data.map((league: League, index: number) => (
        <SingleLeague key={league.id} leagueId={league.id} subLeague={league.name} index={index} />
      ))}
    </>
  );
};

import { Link } from "react-router-dom";
import { useFetchLeagues } from "../customHooks/useFetchLeagues";

export const Navbar = () => {
  const { isPending, error, data } = useFetchLeagues();

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>An error has occurred {error.message}</p>;

  return (
    <div className="flex items-center gap-8 w-full text-zinc-800 dark:text-zinc-100 text-sm">
      {data.map((voivodeship) => (
        <Link key={voivodeship.id} to={`/voivode/${voivodeship.id}`}>
          {voivodeship.name}
        </Link>
      ))}
    </div>
  );
};

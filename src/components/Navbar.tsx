import { Link } from "react-router-dom";
import { useFetchLeagues } from "../customHooks/useFetchLeagues";
import { useState } from "react";
// import { IoMenu } from "react-icons/io5";
import { GiPoland } from "react-icons/gi";

export const Navbar = () => {
  const { isPending, error, data } = useFetchLeagues();
  const [isMenuVisible, setisMenuVisible] = useState(false);

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>An error has occurred {error.message}</p>;

  return (
    <>
      <button
        className="flex flex-row text-xs items-center gap-2 p-2 bg-zinc-700 rounded-md hover:bg-zinc-600 transition-colors ease-in-out"
        onClick={() => {
          setisMenuVisible((prev) => !prev);
        }}
      >
        <GiPoland className="size-4" />
        Wybierz województwo
      </button>

      <div
        className={`${
          isMenuVisible ? "flex" : "hidden"
        } items-start gap-4 text-zinc-800 dark:text-zinc-100 text-sm absolute flex-col bg-zinc-800 left-0 top-10 py-5 px-8 z-10 rounded-md shadow-lg`}
      >
        {data.map((voivodeship) => (
          <Link key={voivodeship.id} to={`/voivode/${voivodeship.id}`}>
            {voivodeship.name}
          </Link>
        ))}
      </div>
    </>
  );
};

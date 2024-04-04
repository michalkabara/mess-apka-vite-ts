import { Link } from "react-router-dom";
import { useFetchLeagues } from "../customHooks/useFetchLeagues";
import { useState, useRef, useMemo } from "react";
// import { IoMenu } from "react-icons/io5";
import { GiPoland } from "react-icons/gi";

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownVoivodeButtonRef = useRef(null);
  const comboBoxInputRef = useRef<HTMLInputElement>(null);

  const { isPending, error, data } = useFetchLeagues();

  const filteredItems = useMemo(() => {
    return data?.filter((item) => item.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()));
  }, [data, searchQuery]);

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>An error has occurred {error.message}</p>;

  return (
    <div className="dropdown">
      <button
        tabIndex={0}
        role="button"
        onClick={() => {
          comboBoxInputRef.current?.focus();
        }}
        ref={dropdownVoivodeButtonRef}
        className="flex flex-row text-xs items-center gap-2 p-2 bg-zinc-700 rounded-md hover:bg-zinc-600 transition-colors ease-in-out cursor-pointer"
      >
        <GiPoland className="size-4" />
        Wybierz województwo
      </button>

      <div
        className="absolute bg-zinc-800 flex flex-col z-10 rounded-md mt-2 dropdown-content p-3 gap-1 shadow-lg"
        tabIndex={0}
      >
        <input
          type="text"
          className="p-2 rounded-md text-sm mb-2"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          autoFocus
          ref={comboBoxInputRef}
        />
        {filteredItems?.map((voivodeship) => (
          <Link
            role="button"
            className="hover:bg-zinc-700 transition-colors ease-in-out px-3 py-2 w-full rounded-md text-sm"
            autoFocus
            key={voivodeship.id}
            to={`/voivode/${voivodeship.id}`}
          >
            {voivodeship.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

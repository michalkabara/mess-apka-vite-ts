import { RefObject, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useFetchLeagues } from "../../customHooks/fetchLeagueData/useFetchLeagues";
import { League } from "../../types/leagueTypes";
import { IoSearch } from "react-icons/io5";

export const VoivodeDropdown: React.FC<{
  comboBoxInputRef: RefObject<HTMLInputElement>;
  handleMenuItemClick: () => void;
}> = ({ comboBoxInputRef, handleMenuItemClick }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const { isPending, error, data } = useFetchLeagues();

  const filteredItems = useMemo(() => {
    return data?.filter((item: League) => item.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()));
  }, [data, searchQuery]);

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>An error has occurred {error.message}</p>;

  return (
    <div
      className="dark:bg-zinc-800 bg-white flex flex-col z-10 rounded-md mt-2 dropdown-content sm:p-2 p-3 pb-4 gap-1 shadow-lg sm:w-[190px] min-w-[150px] w-full"
      tabIndex={0}
    >
      <div className="relative flex flex-row items-center">
        <IoSearch className="absolute -translate-y-1 translate-x-2" />

        <input
          type="text"
          className="p-2 rounded-md text-xs mb-2 w-full pl-7 dark:bg-zinc-700 bg-zinc-200"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          autoFocus
          ref={comboBoxInputRef}
        />
      </div>

      {filteredItems?.map((voivodeship: League) => (
        <Link
          role="button"
          className="hover:dark:bg-zinc-700 hover:bg-zinc-200 transition-colors ease-in-out w-full rounded-md text-xs p-2 flex flex-row gap-2"
          onClick={handleMenuItemClick}
          key={voivodeship.id}
          to={`/voivode/${voivodeship.id}`}
        >
          <img src={voivodeship.logoUrl} alt={voivodeship.name} className="size-4" /> {voivodeship.name}
        </Link>
      ))}
    </div>
  );
};

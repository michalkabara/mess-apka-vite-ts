import { FC, RefObject, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useFetchLeagues } from "../../customHooks/fetchLeagueData/useFetchLeagues";
import { League } from "../../types";
import { IoSearch } from "react-icons/io5";

export const VoivodeDropdown: FC<{
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
      className="bg-zinc-800 flex flex-col z-10 rounded-md mt-2 dropdown-content p-2 pb-4 gap-1 shadow-lg w-[190px] min-w-[150px]"
      tabIndex={0}
    >
      <div className="relative flex flex-row items-center">
        <IoSearch className="absolute -translate-y-1 translate-x-2" />

        <input
          type="text"
          className="p-2 rounded-md text-xs mb-2 w-full pl-7"
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
          className="hover:bg-zinc-700 transition-colors ease-in-out w-full rounded-md text-xs p-2"
          onClick={handleMenuItemClick}
          key={voivodeship.id}
          to={`/voivode/${voivodeship.id}`}
        >
          {voivodeship.name}
        </Link>
      ))}
    </div>
  );
};

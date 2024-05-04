import { RefObject, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useFetchLeagues } from "../customHooks/useFetchLeagues";
import { League } from "../types";

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
      className="bg-zinc-800 flex flex-col z-10 rounded-md mt-2 dropdown-content p-3 gap-1 shadow-lg w-full"
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

      {filteredItems?.map((voivodeship: League) => (
        <Link
          role="button"
          className="hover:bg-zinc-700 transition-colors ease-in-out px-3 py-2 w-full rounded-md text-sm"
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

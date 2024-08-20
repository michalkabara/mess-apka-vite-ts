import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useDebounce } from "@uidotdev/usehooks";
import { useFetchSearch } from "../../customHooks/useFetchSearch";
import { Link } from "react-router-dom";
import { SearchSkeleton } from "../skeletons/SearchSkeleton";
import { IoClose } from "react-icons/io5";

interface ModalType {
  open: boolean;
  onClose?: () => void;
  setIsSearchModalOpen: (prev: boolean) => void;
}

const SearchModal: React.FC<ModalType> = ({ open, onClose, setIsSearchModalOpen }) => {
  const dialog = useRef<HTMLDialogElement>();

  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 500);
  const { isPending, data } = useFetchSearch(debouncedSearch);

  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [open]);

  const handleItemClick = () => {
    setIsSearchModalOpen(false);
    setSearchQuery("");
  };

  return createPortal(
    <dialog
      className="modal mt-[15%] md:w-1/3 sm:w-4/5 w-[95%] p-8 rounded-md bg-zinc-800 backdrop:bg-black/50"
      ref={dialog}
      onClose={onClose}
    >
      <div className="flex mb-5 gap-5">
        <input
          type="text"
          placeholder="Szukaj"
          className="border w-full text-xs p-3 rounded-md placeholder:text-white dark:placeholder:text-zinc-200 placeholder:text-xs border-zinc-600"
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          value={searchQuery}
        />
        <button className="text-xl" onClick={() => setIsSearchModalOpen(false)}>
          <IoClose />
        </button>
      </div>
      <div className="">
        <p className="mt-5 text-center text-sm opacity-60 font-light">Wyniki wyszukiwania:</p>
        {isPending && searchQuery ? <SearchSkeleton /> : ""}
        {data?.teams.length ? (
          <div className="text-sm my-1 hover:bg-zinc-800 p-2  rounded-md cursor-pointer">
            <span className={`text-green-400`}>Drużyna: </span>
            <div className="flex flex-col gap-3 mt-3 text-xs">
              {data?.teams?.map((team) => (
                <Link to={`/team/${team.id}`} key={team.id} onClick={handleItemClick}>
                  {team.display} {team?.season}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}

        {data?.players.length ? (
          <div className="text-sm my-1 hover:bg-zinc-800 p-2 rounded-md cursor-pointer">
            <span className="text-blue-400">Zawodnik: </span>
            <div className="flex flex-col gap-3 mt-3 text-xs">
              {data?.players?.map((player) => (
                <Link to={`/player/${player.id}`} key={player.id} onClick={handleItemClick}>
                  {player.display} {player?.season}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
        {data?.leagues.length ? (
          <div className="text-sm my-1 hover:bg-zinc-800 p-2  rounded-md cursor-pointer">
            <span className="text-orange-400">Liga: </span>
            <div className="flex flex-col gap-3 mt-3 text-xs">
              {data?.leagues?.map((league) => (
                <Link to={`/league/${league.id}`} key={league.id} onClick={handleItemClick}>
                  {league.display}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </dialog>,
    document.getElementById("modal")
  );
};

export default SearchModal;
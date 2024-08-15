import { Link } from "react-router-dom";
import { useFetchSearch } from "../../customHooks/useFetchSearch";
import { useDebounce } from "@uidotdev/usehooks";

export const SearchResults: React.FC<{ searchQuery: string; setIsSearchModalOpen: (state: boolean) => void }> = ({
  searchQuery,
  setIsSearchModalOpen,
}) => {
  const debouncedSearch = useDebounce(searchQuery, 500);
  const { isPending, data } = useFetchSearch(debouncedSearch);

  // const handleMenuItemClick = (e) => {
  //   e.preventDefault();
  //   // setIsSearchModalOpen(false);
  // };

  return (
    <div className="p-3 rounded-md bg-zinc-800 w-[550px]">
      <p className="mt-2 text-center text-sm opacity-60 font-light">Wyniki wyszukiwania:</p>
      {isPending ? <p>Loading...</p> : ""}
      {data?.teams.length ? (
        <div className="text-sm my-1 hover:bg-zinc-800 p-2  rounded-md cursor-pointer">
          <span className={`text-green-400`}>Drużyna: </span>
          <div className="flex flex-col gap-3 mt-3 text-xs">
            {data?.teams?.map((team) => (
              <Link to={`/team/${team.id}`} key={team.id}>
                {team.display}
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
              <Link to={`/player/${player.id}`} key={player.id}>
                {player.display}
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
              <Link to={`/laegue/${league.id}`} key={league.id}>
                {league.display}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

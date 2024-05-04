import { RiStarSmileFill, RiTrophyLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useFavouriteLeaguesContext } from "../customHooks/useFavouriteLeaguesContext";

export const FavouriteLeagues: React.FC<{ handleMenuItemClick: () => void }> = ({ handleMenuItemClick }) => {
  const { favouriteLeagues, removeFavouriteLeague } = useFavouriteLeaguesContext();

  return (
    <>
      <div className="flex flex-row gap-2 items-center">
        <h3 className="font-bold mb-2">Moje Ligi</h3>
        <RiTrophyLine className="-translate-y-1" />
      </div>
      <div className="flex flex-col gap-2 text-xs">
        {favouriteLeagues.map((favLeague: { name: string; id?: string }) => (
          <div key={favLeague.name} className="flex flex-row gap-2 items-center text-xs justify-between">
            <Link to={`/league/${favLeague.id}`} className="truncate capitalize" onClick={handleMenuItemClick}>
              {favLeague.name}
            </Link>

            <div>
              <RiStarSmileFill
                onClick={() => {
                  removeFavouriteLeague(favLeague.name);
                }}
                className="text-yellow-500 size-4 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

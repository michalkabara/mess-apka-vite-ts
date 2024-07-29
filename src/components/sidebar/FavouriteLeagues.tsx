import { RiStarSmileFill, RiTrophyLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useFavouriteLeaguesContext } from "../../customHooks/useFavouriteLeaguesContext";

export const FavouriteLeagues: React.FC<{ handleMenuItemClick?: () => void }> = ({ handleMenuItemClick }) => {
  const { favouriteLeagues, removeFavouriteLeague } = useFavouriteLeaguesContext();

  return (
    <>
      <div className="flex flex-row gap-2 items-center">
        <h3 className="font-bold">Moje Ligi</h3>
        <RiTrophyLine />
      </div>
      <div className="flex flex-col gap-3 text-xs font-light">
        {favouriteLeagues.length > 0 ? (
          favouriteLeagues.map((favLeague) => (
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
          ))
        ) : (
          <p className="text-xs opacity-70 font-extralight">Dodaj ligę do ulubionych</p>
        )}
      </div>
    </>
  );
};

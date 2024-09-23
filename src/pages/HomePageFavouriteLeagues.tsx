import { ChildLeague } from "../components/generic/ChildLeague";
import { useFavouriteLeaguesContext } from "../customHooks/useFavouriteLeaguesContext";

export const HomePageFavouriteLeagues = () => {
  const { favouriteLeagues } = useFavouriteLeaguesContext();

  return (
    <div className="flex flex-col gap-2">
      {favouriteLeagues.map((childLeague, index) => {
        return (
          <ChildLeague
            order={0}
            isExpanded={true}
            key={childLeague.id}
            leagueId={childLeague.id}
            subLeague={childLeague.name}
            index={index}
          />
        );
      })}
    </div>
  );
};

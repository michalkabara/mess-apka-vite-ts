import { NewsButton } from "./ui/NewsButton";
import { FavouriteLeagues } from "./FavouriteLeagues";
import { FavouriteTeams } from "./FavouriteTeams";

export const Sidebar: React.FC<{ handleMenuItemClick?: () => void }> = ({ handleMenuItemClick }) => {
  return (
    <div className="text-zinc-900 dark:text-white text-sm flex flex-col gap-4 sticky top-2 w-full">
      <div>
        <NewsButton />

        <FavouriteLeagues handleMenuItemClick={handleMenuItemClick} />
      </div>
      <FavouriteTeams handleMenuItemClick={handleMenuItemClick} />
    </div>
  );
};

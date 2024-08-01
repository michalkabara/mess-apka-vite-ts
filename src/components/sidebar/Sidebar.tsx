import { VoivodeDropdownButton } from "./VoivodeDropdownButton";
import { NewsButton } from "../ui/NewsButton";
import { FavouriteLeagues } from "./FavouriteLeagues";
import { FavouriteTeams } from "./FavouriteTeams";

export const Sidebar: React.FC<{ handleMenuItemClick?: () => void }> = ({ handleMenuItemClick }) => {
  return (
    <div className="text-zinc-900 dark:text-white text-sm flex flex-col gap-4 sticky top-2 w-full z-10">
      <div className="flex flex-col gap-3">
        <div className="hidden sm:grid">
          <VoivodeDropdownButton />
        </div>

        <NewsButton />
        <FavouriteLeagues handleMenuItemClick={handleMenuItemClick} />
        <FavouriteTeams handleMenuItemClick={handleMenuItemClick} />
      </div>
    </div>
  );
};

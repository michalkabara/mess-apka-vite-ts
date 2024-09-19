import { VoivodeDropdownButton } from "./VoivodeDropdownButton";
import { NewsButton } from "../ui/NewsButton";
import { FavouriteLeagues } from "./FavouriteLeagues";
import { FavouriteTeams } from "./FavouriteTeams";
import { Link } from "react-router-dom";

export const Sidebar: React.FC<{ handleMenuItemClick?: () => void }> = ({ handleMenuItemClick }) => {
  return (
    <div className="text-zinc-900 dark:text-white text-sm flex flex-col gap-4 sticky top-2 w-full z-10">
      <div className="flex flex-col gap-3">
        <div className="hidden sm:grid">
          <VoivodeDropdownButton />
        </div>

        <Link to="/blog">
          <NewsButton />
        </Link>
        <FavouriteLeagues handleMenuItemClick={handleMenuItemClick} />
        <div className="mt-3">
          <FavouriteTeams handleMenuItemClick={handleMenuItemClick} />
        </div>

        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-6504994952505699"
          data-ad-slot="9628500701"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>
    </div>
  );
};

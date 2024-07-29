import { SingleTab } from "../generic/SingleTab";
import { League } from "../../types/leagueTypes";

export const VoivodeTabs: React.FC<{
  childLeagues: League[] | undefined;
  onClick: (id: string) => void;
  selectedLeagueId: string | undefined;
}> = ({ childLeagues, onClick, selectedLeagueId }) => {
  return (
    <div className="flex sm:flex-row w-full gap-3 flex-col">
      {childLeagues?.map((league) => (
        <SingleTab
          key={league?.id}
          onClick={() => onClick(league?.id)}
          buttonText={league?.name.split("-")[0]}
          selectedTab={selectedLeagueId}
          index={league?.id}
        />
      ))}
    </div>
  );
};

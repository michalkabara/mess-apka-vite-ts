import { LeagueHeader } from "./LeagueHeader";
import { useEffect, useState } from "react";
import { useFetchLeagueRoundCount } from "../../customHooks/fetchLeagueData/useFetchLeagueRoundCount";
import { useFetchLeagueRoundGames } from "../../customHooks/fetchLeagueData/useFetchLeagueRoundGames";
import { GameLink } from "../ui/GameLink";
import { GameLinkSkeleton } from "../skeletons/GameLinkSkeleton";
import { Pagination } from "./Pagination";
import { LeagueHeaderSkeleton } from "../skeletons/LeagueHeaderSkeleton";

export const ChildLeague: React.FC<{
  leagueId: string;
  subLeague: string;
  index: number;
  order: number;
  isExpanded?: boolean;
}> = ({ leagueId, subLeague, index, order, isExpanded }) => {
  const [isActive, setIsActive] = useState(isExpanded);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [numberOfPages, setNumberOfPages] = useState<number | undefined>(0);

  const { error, data, status } = useFetchLeagueRoundGames(leagueId, currentPage);

  const { isPending, error: leagueRoundCountError, data: leagueRoundCountData } = useFetchLeagueRoundCount(leagueId);

  useEffect(() => {
    setNumberOfPages(leagueRoundCountData);
  }, [leagueRoundCountData]);

  if (isPending) return <LeagueHeaderSkeleton />;

  if (error && leagueRoundCountError) return <p>An error has occurred {error.message}</p>;

  const handleToggleSection = () => {
    setIsActive((prev) => !prev);
  };

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <div className={`order-${order}`}>
      <div className="flex flex-col gap-2 rounded-xl">
        <div>
          <LeagueHeader
            leagueName={subLeague}
            isActive={isActive}
            leagueId={leagueId}
            isLinkEnabled={true}
            toggleSection={handleToggleSection}
          />
          <div
            className={`mt-2 sm:flex-row flex flex-col gap-1 dark:text-gray-50 dark:bg-zinc-800 bg-zinc-100 rounded-md p-1 bottom-0 w-full duration-500 ease-in-out justify-center items-center px-3 relative${
              isActive ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <p className="text-xs sm:absolute left-9">KOLEJKA</p>
            <Pagination numberOfPages={numberOfPages} handleChange={handleChange} currentPage={currentPage} />
          </div>
          {status !== "success" && (
            <div
              className={`mecze mt-2 flex flex-col gap-1 text-xs relative transition-all duration-500 ease-in-out overflow-hidden`}
            >
              <GameLinkSkeleton />
              <GameLinkSkeleton />
              <GameLinkSkeleton />
              <GameLinkSkeleton />
              <GameLinkSkeleton />
              <GameLinkSkeleton />
              <GameLinkSkeleton />
            </div>
          )}
          <div
            className={` grid ease-in-out transition-all duration-500 ${
              isActive ? `opacity-100` : "opacity-0 pointer-events-none mt-0 "
            }`}
            style={isActive ? { gridTemplateRows: "1fr" } : { gridTemplateRows: "0fr" }}
          >
            <div
              data-section-name={index}
              className={`mecze mt-2 flex flex-col gap-1 text-xs relative transition-all duration-500 ease-in-out overflow-hidden`}
            >
              {data?.map((game, index) => (
                <div key={game.id} className="flex flex-col items-center">
                  <GameLink game={game} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { LeagueHeader } from "./LeagueHeader";
import { SingleGame } from "./SingleGame";
import { Link } from "react-router-dom";
import { FC, useEffect, useState } from "react";
// import { useFetchLeagueGames } from "../customHooks/useFetchLeagueGames";
import { LinearProgress, Pagination } from "@mui/material";
import { useFetchLeagueRoundCount } from "../../customHooks/fetchLeagueData/useFetchLeagueRoundCount";
import { useFetchLeagueRoundGames } from "../../customHooks/fetchLeagueData/useFetchLeagueRoundGames";

export const SingleLeague: FC<{ leagueId: string; subLeague: string; index: number }> = ({
  leagueId,
  subLeague,
  index,
}) => {
  const [isActive, setIsActive] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [numberOfPages, setNumberOfPages] = useState<number | undefined>(0);

  // const { error, data, status } = useFetchLeagueGames(leagueId, currentPage);

  const { error, data, status } = useFetchLeagueRoundGames(leagueId, currentPage);

  const { isPending, error: leagueRoundCountError, data: leagueRoundCountData } = useFetchLeagueRoundCount(leagueId);

  useEffect(() => {
    setNumberOfPages(leagueRoundCountData);
  }, [leagueRoundCountData]);

  if (isPending) return <p>Loading...</p>;

  if (error && leagueRoundCountError) return <p>An error has occurred {error.message}</p>;

  const handleToggleSection = () => {
    setIsActive((prev) => !prev);
  };

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <div className="flex flex-col mb-1 gap-2 ">
      {numberOfPages > 0 && (
        <div>
          <LeagueHeader
            leagueName={subLeague}
            isActive={isActive}
            leagueId={leagueId}
            isLinkEnabled={true}
            toggleSection={handleToggleSection}
          />
          <div
            className={`mt-2 sm:flex-row flex flex-col gap-1 text-gray-50 bg-zinc-800 rounded-md p-1 bottom-0 w-full duration-500 ease-in-out justify-center items-center px-3 relative${
              isActive ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <p className="text-xs sm:absolute left-8">KOLEJKA</p>
            <Pagination
              count={numberOfPages}
              size="small"
              onChange={handleChange}
              page={currentPage}
              sx={{
                button: { color: "#ffffff", fontSize: "12px", height: "24px", width: "24px", minWidth: "22px" },
                ".Mui-selected": { backgroundColor: "rgb(255 255 255 / 12%)!important" },
                div: { color: "white" },
              }}
              className="text-white"
            />
          </div>
          {status !== "success" && <LinearProgress />}
          <div
            className={` grid ease-in-out transition-all duration-500 ${
              isActive ? `opacity-100 mb-2` : "opacity-0 pointer-events-none mt-0 "
            }`}
            style={isActive ? { gridTemplateRows: "1fr" } : { gridTemplateRows: "0fr" }}
          >
            <div
              data-section-name={index}
              className={`mecze mt-2 flex flex-col gap-1 text-xs relative transition-all duration-500 ease-in-out overflow-hidden`}
            >
              {data?.map((game) => (
                <div key={game.id} className="flex flex-col items-center ">
                  <Link
                    to={`/game/${game.id}`}
                    className="flex flex-row border border-zinc-700 items-center w-full content-between hover:bg-zinc-300 dark:hover:bg-zinc-800 rounded-md py-2 px-3 ease-in-out duration-500 gap-2"
                  >
                    <SingleGame
                      date={game.date}
                      homeTeam={game.homeTeam}
                      awayTeam={game.awayTeam}
                      homeGoals={game.homeGoals}
                      awayGoals={game.awayGoals}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
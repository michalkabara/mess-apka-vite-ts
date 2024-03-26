import { LeagueHeader } from "./LeagueHeader";
import { SingleGame } from "./SingleGame";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFetchLeagueGames } from "../customHooks/useFetchLeagueGames";
import { LinearProgress, Pagination } from "@mui/material";

export const SingleLeague: React.FC<{ leagueId: string; subLeague: string; index: number }> = ({
  leagueId,
  subLeague,
  index,
}) => {
  const [isActive, setIsActive] = useState(true);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [numberOfPages, setNumberOfPages] = useState<number>(0);

  const { error, data, status } = useFetchLeagueGames(leagueId, currentPage);

  useEffect(() => {
    setNumberOfPages(data?.pageCount);
  }, [data?.pageCount]);

  if (error) return <p>An error has occurred {error.message}</p>;

  const handleToggleSection = () => {
    setIsActive((prev) => !prev);
  };

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <div className="flex flex-col mb-2 gap-2 ">
      <LeagueHeader
        leagueName={subLeague}
        isActive={isActive}
        leagueId={leagueId}
        isLinkEnabled={true}
        toggleSection={handleToggleSection}
      />
      {status !== "success" && <LinearProgress />}
      <div
        data-section-name={index}
        className={`mecze mt-2 gap-1 flex flex-col text-xs min-h-[660px] relative ${!isActive && "hidden"}`}
      >
        {data?.data.map((game) => (
          <div key={game.id} className="flex flex-col items-center ">
            <Link
              to={`/game/${game.id}`}
              className="flex flex-row items-center w-full content-between hover:bg-zinc-300 dark:hover:bg-zinc-800 rounded-md py-[5px] px-4 ease-in-out duration-500 gap-2"
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

        <div className="flex justify-center text-gray-50 bg-zinc-800 rounded-md p-1 absolute bottom-0 w-full">
          <Pagination
            count={numberOfPages}
            size="small"
            onChange={handleChange}
            page={currentPage}
            sx={{
              button: { color: "#ffffff" },
              ".Mui-selected": { backgroundColor: "rgb(255 255 255 / 16%)!important" },
              div: { color: "white" },
            }}
            className="text-white"
          />
        </div>
      </div>
    </div>
  );
};

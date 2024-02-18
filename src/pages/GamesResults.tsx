import { Link } from "react-router-dom";
import { SingleGame } from "../components/SingleGame";
import { useFetchGamesGroupedByPeriod } from "../customHooks/useFetchGamesGroupedByPeriods";

export const GamesResults = () => {
  const { isPending, error, data } = useFetchGamesGroupedByPeriod();

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>An error has occurred {error.message}</p>;

  const toggleSection = (e: any) => {
    e.target.classList.toggle("rotate");
    let gamesList: any = document.querySelector(".mecze");
    gamesList.classList.toggle("hidden");
  };

  return (
    <>
      <div className="league-name  text-center relative flex justify-center bg-zinc-700 rounded-md py-2 px-3">
        <span className="text-md font-bold uppercase">
          <Link to="/teams">Liga Okręgowa Tarnów</Link>
        </span>
        <div
          className="w-6 absolute right-3 bottom-2 toggle-button ease-in-out duration-500 transition-all cursor-pointer"
          onClick={toggleSection}
        >
          <svg
            className="pointer-events-none "
            fill="white"
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z" />
          </svg>
        </div>
      </div>
      <div className="mecze mt-5 gap-2 flex flex-col text-xs">
        {Object.keys(data)
          .reverse()
          .map((period) => {
            return (
              <div className="flex flex-col gap-2">
                <div className="text-center">Kolejka {period}</div>
                {data[period].map((mecz: any, index: number) => (
                  <div
                    key={`${mecz.MatchId}-${index}`}
                    className="flex flex-col items-center"
                  >
                    <Link
                      to={`/game/${mecz.MatchId}`}
                      className="flex flex-row items-center w-full content-between hover:bg-zinc-700 rounded-md py-2 px-3 ease-in-out duration-500 gap-2 "
                    >
                      <SingleGame
                        data={mecz.Date}
                        homeTeam={mecz.HomeTeamName}
                        homeTeamLogo={mecz.HomeTeamLogoUrl}
                        awayTeam={mecz.AwayTeamName}
                        awayTeamLogo={mecz.AwayTeamLogoUrl}
                        homeGoals={mecz.HomeGoals}
                        awayGoals={mecz.AwayGoals}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            );
          })}
      </div>
    </>
  );
};

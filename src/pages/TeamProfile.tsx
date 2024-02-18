import { useParams, useSearchParams } from "react-router-dom";
import { SingleGame } from "./SingleGame";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { TeamProfileDetails } from "./TeamProfileDetails";
import { TeamsGroup } from "./TeamsGroup";
import { useFetchTeams } from "../customHooks/useFetchTeams";
import { useFetchGames } from "../customHooks/useFetchGames";

const tabs = [
  { name: "Tabela" },
  { name: "Wyniki" },
  { name: "Domowe" },
  { name: "Wyjazdowe" },
  { name: "Statystyki" },
  { name: "Kadra" },
  { name: "Nadchodzące mecze" },
];

export const TeamProfile = () => {
  const { teamId } = useParams();
  const [selectedTab, setSelecteTab] = useState(0);

  let [searchParams, setSearchParams] = useSearchParams();

  const { isPending, error, data } = useFetchTeams();

  useEffect(() => {
    setSelecteTab(+searchParams.get("page"));
  }, []);

  const {
    isPending: areGamesPending,
    error: gamesError,
    data: gamesData,
  } = useFetchGames();

  if (isPending || areGamesPending) return <p>Loading...</p>;

  if (error || gamesError) return <p>An error has occurred {error.message}</p>;

  const teamData = data.find((team) => team.TeamId === teamId);
  const teamName = teamData.TeamName;

  const teamGames = gamesData.filter(
    (game) => game.HomeTeamName === teamName || game.AwayTeamName === teamName
  );

  const homeGames = gamesData.filter((game) => game.HomeTeamName === teamName);
  const awayGames = gamesData.filter((game) => game.AwayTeamName === teamName);

  const selectTab = (selectedIndex) => {
    setSelecteTab(selectedIndex);
  };

  return (
    <>
      <TeamProfileDetails
        teamLogo={teamData?.LogoUrl}
        teamName={teamData?.TeamName}
      />

      <div className="mt-5">
        <TeamsGroup isHeaderVisible={false} filterTeam={teamId} />
      </div>

      <div className="tabs">
        <div className="flex flex-row gap-3 mt-5">
          {tabs.map((button, index) => (
            <button
              key={`tab-${index}`}
              onClick={() => {
                selectTab(index);
                setSearchParams(`page=${index}`);
              }}
              className={`${
                selectedTab === index ? "active bg-slate-700" : "bg-zinc-700"
              } p-3  rounded-lg hover:bg-zinc-900 transition duration-200 text-xs`}
            >
              {button.name}
            </button>
          ))}
        </div>

        <div
          className={`mecze mt-5 gap-2 flex-col text-xs ${
            selectedTab === 0 ? "flex" : "hidden"
          }`}
        >
          <TeamsGroup isHeaderVisible={false} />
        </div>

        <div
          className={`mecze mt-5 gap-2 flex-col text-xs ${
            selectedTab === 1 ? "flex" : "hidden"
          }`}
        >
          {teamGames?.map((mecz, index) => (
            <Link
              to={`/game/${mecz.MatchId}`}
              key={`${mecz.MatchId}-${index}`}
              className="flex flex-row items-center w-full content-between hover:bg-zinc-700 rounded-md py-2 px-3 ease-in-out duration-500 gap-2"
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
          ))}
        </div>

        <div
          className={`mecze mt-5 gap-2 flex-col text-xs ${
            selectedTab === 2 ? "flex" : "hidden"
          }`}
        >
          {homeGames?.map((mecz, index) => (
            <Link
              to={`/game/${mecz.MatchId}`}
              key={`${mecz.MatchId}-${index}`}
              className="flex flex-row items-center w-full content-between hover:bg-zinc-700 rounded-md py-2 px-3 ease-in-out duration-500 gap-2"
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
          ))}
        </div>

        <div
          className={`mecze mt-5 gap-2 flex-col text-xs ${
            selectedTab === 3 ? "flex" : "hidden"
          }`}
        >
          {awayGames?.map((mecz, index) => (
            <Link
              to={`/game/${mecz.MatchId}`}
              key={`${mecz.MatchId}-${index}`}
              className="flex flex-row items-center w-full content-between hover:bg-zinc-700 rounded-md py-2 px-3 ease-in-out duration-500 gap-2"
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
          ))}
        </div>
      </div>
    </>
  );
};

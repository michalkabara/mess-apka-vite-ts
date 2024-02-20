import { useParams, useSearchParams } from "react-router-dom";
import { SingleGame } from "../components/SingleGame";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { TeamProfileDetails } from "../components/TeamProfilesDetails";
import { TeamsGroup } from "./TeamsGroup";
import { useFetchTeams } from "../customHooks/useFetchTeams";
import { useFetchGames } from "../customHooks/useFetchGames";
import { gameType } from "../types";
import { TeamPlayers } from "../components/TeamPlayers";

const tabs: { name: string }[] = [
  { name: "Tabela" },
  { name: "Wyniki" },
  { name: "Domowe" },
  { name: "Wyjazdowe" },
  { name: "Statystyki" },
  { name: "Kadra" },
  { name: "Nadchodzące mecze" },
];

const exampleTeam = [
  { name: "Daniel", surname: "Bajorek", number: "14", age: "18", mainLeg: "L" },
  { name: "Marcin", surname: "Bałut", number: "4", age: "18", mainLeg: "L" },
  { name: "Dominik", surname: "Boda", number: "19", age: "18", mainLeg: "L" },
  {
    name: "Bartosz",
    surname: "Chudoba",
    number: "11",
    age: "18",
    mainLeg: "L",
  },
  { name: "Patryk", surname: "Chudoba", number: "6", age: "18", mainLeg: "L" },
  { name: "Michał", surname: "Gębala", number: "x", age: "18", mainLeg: "L" },
  {
    name: "Krzysztof",
    surname: "Jabłoński",
    number: "8",
    age: "18",
    mainLeg: "L",
  },
  { name: "Błażej", surname: "Klesyk", number: "x", age: "18", mainLeg: "L" },
  { name: "Patryk", surname: "Klich", number: "13", age: "18", mainLeg: "L" },
  { name: "Michał", surname: "Kloch", number: "x", age: "18", mainLeg: "L" },
  {
    name: "Adrian",
    surname: "Kochniarczyk",
    number: "7",
    age: "18",
    mainLeg: "L",
  },
  { name: "Kamil", surname: "Kocik", number: "x", age: "18", mainLeg: "L" },
  { name: "Sebastian", surname: "Koza", number: "17", age: "18", mainLeg: "L" },
  {
    name: "Andrzej",
    surname: "Krakowski",
    number: "10",
    age: "18",
    mainLeg: "L",
  },
  {
    name: "Miłosz",
    surname: "Kraszewski",
    number: "x",
    age: "18",
    mainLeg: "L",
  },
  {
    name: "Krzysztof",
    surname: "Krauze",
    number: "16",
    age: "18",
    mainLeg: "L",
  },
  {
    name: "Przemysław",
    surname: "Krawiec",
    number: "18",
    age: "18",
    mainLeg: "L",
  },
  { name: "Michał", surname: "Łątka", number: "x", age: "18", mainLeg: "L" },
  {
    name: "Łukasz",
    surname: "Lisak",
    number: "33",
    isGoalKeeper: true,
    age: "18",
    mainLeg: "L",
  },
  {
    name: "Mateusz",
    surname: "Orłowski",
    number: "x",
    age: "18",
    mainLeg: "L",
  },
  {
    name: "Bartłomiej",
    surname: "Pociecha",
    number: "12",
    age: "18",
    mainLeg: "L",
  },
  {
    name: "Mateusz",
    surname: "Reszczyński",
    number: "3",
    age: "18",
    mainLeg: "L",
  },
  {
    name: "Rafał",
    surname: "Słomski",
    number: "9",
    isCaptain: true,
    age: "18",
    mainLeg: "L",
  },
];

export const TeamProfile = () => {
  const { teamId } = useParams();
  const [selectedTab, setSelecteTab] = useState<number | null>(0);

  let [searchParams, setSearchParams] = useSearchParams();

  const { isPending, error, data } = useFetchTeams();

  useEffect(() => {
    const currentPage = searchParams?.get("page");
    if (!currentPage) return;
    setSelecteTab(parseInt(currentPage));
  }, []);

  const {
    isPending: areGamesPending,
    error: gamesError,
    data: gamesData,
  } = useFetchGames();

  if (isPending || areGamesPending) return <p>Loading...</p>;

  if (error || gamesError) return <p>An error has occurred {error?.message}</p>;

  const teamData = data.find(
    (team: { TeamId: string }) => team.TeamId === teamId
  );
  const teamName = teamData.TeamName;

  const teamGames = gamesData.filter(
    (game: { HomeTeamName: string; AwayTeamName: string }) =>
      game.HomeTeamName === teamName || game.AwayTeamName === teamName
  );

  const homeGames = gamesData.filter(
    (game: gameType) => game.HomeTeamName === teamName
  );
  const awayGames = gamesData.filter(
    (game: gameType) => game.AwayTeamName === teamName
  );

  const selectTab = (selectedIndex: number) => {
    setSelecteTab(selectedIndex);
  };

  return (
    <>
      <TeamProfileDetails
        teamLogo={teamData?.LogoUrl}
        teamName={teamData?.TeamName}
        teamId={teamData?.TeamId}
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
          {teamGames?.map((mecz: gameType, index: number) => (
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
          {homeGames?.map((mecz: gameType, index: number) => (
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
          {awayGames?.map((mecz: gameType, index: number) => (
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
            selectedTab === 5 ? "flex" : "hidden"
          }`}
        >
          <TeamPlayers team={exampleTeam} />
        </div>
      </div>
    </>
  );
};

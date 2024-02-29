import { useParams, useSearchParams } from "react-router-dom";
import { SingleGame } from "../components/SingleGame";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { TeamProfileDetails } from "../components/TeamProfilesDetails";
import { TeamsGroup } from "./TeamsGroup";
import { useFetchTeamData } from "../customHooks/useFetchTeamData";
import { useFetchTeamGames } from "../customHooks/useFetchTeamGames";
import { Game } from "../types";
import { TeamPlayers } from "../components/TeamPlayers";
import { SingleTab } from "../components/ui/SingleTab";

const tabs: { name: string }[] = [
  { name: "Wyniki" },
  { name: "Tabela" },
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

export const TeamProfile: React.FC = () => {
  const { teamId } = useParams();
  const [selectedTab, setSelecteTab] = useState<number | null>(0);

  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentPage = searchParams?.get("page");
    if (!currentPage) return;
    setSelecteTab(parseInt(currentPage));
  }, []);

  const { isPending, error, data } = useFetchTeamData(teamId);

  const { isPending: areGamesPending, error: gamesError, data: gamesData } = useFetchTeamGames(teamId);

  if (isPending || areGamesPending) return <p>Loading...</p>;

  if (error || gamesError) return <p>An error has occurred {error?.message}</p>;

  console.log(data?.currentLeague);

  const homeGames = gamesData?.filter((game: Game) => game.homeTeam?.name === data.name);

  const awayGames = gamesData?.filter((game: Game) => game.awayTeam?.name === data.name);

  const selectTabAndChangeUrl = (index: number) => {
    setSelecteTab(index);
    setSearchParams(`page=${index}`);
  };

  return (
    <>
      <TeamProfileDetails teamLogo={data?.logoUrl} teamName={data?.name} teamId={data?.id} />

      <div className="mt-5">
        <TeamsGroup isHeaderVisible={false} filterTeamId={teamId} leagueId={data.currentLeague} />
      </div>

      <div className="tabs">
        <div className="flex flex-row gap-3 mt-5">
          {tabs.map((button, index) => (
            <SingleTab
              key={`tab-${index}`}
              button={button}
              index={index}
              selectTabAndChangeUrl={selectTabAndChangeUrl}
              selectedTab={selectedTab}
            />
          ))}
        </div>

        <div className={`mecze mt-5 gap-2 flex-col text-xs ${selectedTab === 1 ? "flex" : "hidden"}`}>
          <TeamsGroup isHeaderVisible={false} leagueId={data.currentLeague} />
        </div>

        <div className={`mecze mt-5 gap-2 flex-col text-xs ${selectedTab === 0 ? "flex" : "hidden"}`}>
          {gamesData?.reverse().map((mecz: Game, index: number) => (
            <Link
              to={`/game/${mecz.id}`}
              key={`${mecz.id}-${index}`}
              className="flex flex-row items-center w-full content-between hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md py-1 px-2 ease-in-out duration-500 gap-2"
            >
              <SingleGame
                date={mecz.date}
                homeTeam={mecz.homeTeam}
                awayTeam={mecz.awayTeam}
                homeGoals={mecz.homeGoals}
                awayGoals={mecz.awayGoals}
              />
            </Link>
          ))}
        </div>

        <div className={`mecze mt-5 gap-2 flex-col text-xs ${selectedTab === 2 ? "flex" : "hidden"}`}>
          {homeGames?.map((game: Game, index: number) => (
            <Link
              to={`/game/${game.id}`}
              key={`${game.id}-${index}`}
              className="flex flex-row items-center w-full content-between hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md py-1 px-2 ease-in-out duration-500 gap-2"
            >
              <SingleGame
                date={game.date}
                homeTeam={game.homeTeam}
                awayTeam={game.awayTeam}
                homeGoals={game.homeGoals}
                awayGoals={game.awayGoals}
              />
            </Link>
          ))}
        </div>

        <div className={`mecze mt-5 gap-2 flex-col text-xs ${selectedTab === 3 ? "flex" : "hidden"}`}>
          {awayGames?.map((game: Game, index: number) => (
            <Link
              to={`/game/${game.id}`}
              key={`${game.id}-${index}`}
              className="flex flex-row items-center w-full content-between hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md py-1 px-2 ease-in-out duration-500 gap-2"
            >
              <SingleGame
                date={game.date}
                homeTeam={game.homeTeam}
                awayTeam={game.awayTeam}
                homeGoals={game.homeGoals}
                awayGoals={game.awayGoals}
              />
            </Link>
          ))}
        </div>

        <div className={`mecze mt-5 gap-2 flex-col text-xs ${selectedTab === 5 ? "flex" : "hidden"}`}>
          <TeamPlayers team={exampleTeam} />
        </div>
      </div>
    </>
  );
};

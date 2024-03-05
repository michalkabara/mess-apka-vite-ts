import { useParams, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFetchSingleGame } from "../customHooks/useFetchSIngleGame";
import { SingleTab } from "../components/ui/SingleTab";
import { useState } from "react";
import { GameDetailsEntry } from "../components/ui/GameDetailsEntry";
import { useFetchTeamGames } from "../customHooks/useFetchTeamGames";
import { Game } from "../types";
import { SingleGame } from "../components/SingleGame";

export const GameDetails: React.FC = () => {
  const { gameId } = useParams();

  const { isPending, error, data } = useFetchSingleGame(gameId);

  const homeTeam = data?.homeTeam?.id;

  const { isPending: areGamesPending, error: gamesError, data: gamesData } = useFetchTeamGames(homeTeam);

  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTab, setSelecteTab] = useState<number | null>(parseInt(searchParams.get("page") ?? "0"));

  if (isPending || areGamesPending) return <p>Loading...</p>;

  if (error ?? gamesError) return <p>An error has occurred {error?.message}</p>;

  const gameDate = new Date(data.date ?? 0);

  const homeVsAwayTeam = gamesData.filter((game: Game) => game.awayTeam?.name === data.awayTeam?.name);

  // const awayVsHomeTeam = gamesData.filter((game: Game) => game.homeTeam?.name === data.homeTeam?.name);

  const tabs: { name: string }[] = [
    { name: "Mecz" },
    { name: "H2H" },
    { name: "Tabela" },
    { name: "Skład" },
    { name: "Ogółem" },
    { name: `${data.homeTeam?.name} u siebie` },
    { name: `${data.awayTeam?.name} na wyjeździe` },
  ];

  const selectTabAndChangeUrl = (index: number) => {
    setSelecteTab(index);
    setSearchParams(`page=${index}`);
  };

  return (
    <div className="flex items-center flex-col">
      <p>
        {gameDate.getDate()}.{gameDate.getMonth()}.{gameDate.getFullYear()} {gameDate.getHours()}:
        {gameDate.getUTCMinutes() == 0 ? "00" : gameDate.getUTCMinutes()}
      </p>

      <div className="grid grid-cols-3 mt-7 items-start">
        <Link to={`/team/${data.homeTeam?.id}`}>
          <div className="flex flex-col text-center text-xs gap-3 items-center">
            <img src={data.homeTeam?.logoUrl} alt={data.homeTeam?.name} className="w-28 rounded-md p-1 bg-white" />
            <p>{data.homeTeam?.name}</p>
          </div>
        </Link>

        <span className="text-center font-bold text-nowrap text-xl flex justify-center h-full items-center">
          {data.homeGoals} - {data.awayGoals}
        </span>

        <Link to={`/team/${data.awayTeam?.id}`}>
          <div className="flex flex-col text-center text-xs gap-3 items-center">
            <img src={data.awayTeam?.logoUrl} alt={data.awayTeam?.name} className="w-28 rounded-md p-1 bg-white" />
            <p>{data.awayTeam?.name}</p>
          </div>
        </Link>
      </div>

      <div className="tabs">
        <div className="flex flex-row gap-3 mt-5 flex-wrap justify-center">
          {tabs.map((button, index) => (
            <SingleTab
              key={button.name}
              button={button}
              index={index}
              selectTabAndChangeUrl={selectTabAndChangeUrl}
              selectedTab={selectedTab}
            />
          ))}
        </div>

        <div className={` ${selectedTab === 0 ? "initial" : "hidden"}`}>
          <div className="text-xs uppercase bg-zinc-300 dark:bg-zinc-700 opacity rounded-sm p-1 my-2">
            <p>1 Połowa</p>
          </div>
          <div className="flex flex-col w-full justify-between text-sm">
            <div className="flex flex-col items-start gap-1">
              <GameDetailsEntry type="yellow" time="69" order="left" />
            </div>
            <div className="flex flex-col items-end gap-1 ">
              <GameDetailsEntry type="yellow" time="69" order="right" />
              <GameDetailsEntry type="red" time="69" order="right" />
              <GameDetailsEntry type="swap" time="69" order="right" />
            </div>
            <div className="flex flex-col items-start gap-1">
              <GameDetailsEntry type="yellow" time="69" order="left" />
              <GameDetailsEntry type="swap" time="69" order="right" />
              <GameDetailsEntry type="goal" time="69" order="right" />
            </div>
          </div>
          <div className="text-xs uppercase bg-zinc-300 dark:bg-zinc-700 opacity rounded-sm p-1 my-2">
            <p>2 Połowa</p>
          </div>
        </div>

        <div className={`mecze mt-5 gap-2 flex-col text-xs ${selectedTab === 1 ? "flex" : "hidden"}`}>
          {homeVsAwayTeam.reverse().map((mecz: Game, index: number) => (
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
      </div>
    </div>
  );
};

import { useParams, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFetchSingleGame } from "../customHooks/useFetchSIngleGame";
import { SingleTab } from "../components/ui/SingleTab";
import { useState } from "react";
import { GameDetailsEntry } from "../components/ui/GameDetailsEntry";

import { Game, PagedResponse } from "../types";
import { SingleGame } from "../components/SingleGame";
import { GameDetailsTeams } from "../components/GameDetailsTeams";
import { LeagueProfile } from "./LeagueProfile";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../clientApi";
import { LikeTeamButton } from "../components/ui/LikeTeamButton";

export const GameDetails: React.FC = () => {
  const { gameId } = useParams();

  const { isPending, error, data } = useFetchSingleGame(gameId);

  const leagueId = data?.leagueId;

  // const {
  //   isPending: areHomeTeamGamesPending,
  //   error: HomeTeamGamesError,
  //   data: HomeTeamGamesData,
  // } = useFetchTeamGames(data?.homeTeam?.id);

  // const {
  //   isPending: areAwayTeamGamesPending,
  //   error: AwayTeanGamesError,
  //   data: AwayTeamGamesData,
  // } = useFetchTeamGames(data?.awayTeam?.id);

  const {
    isPending: areHomeTeamGamesPending,
    error: HomeTeamGamesError,
    data: HomeTeamGamesData,
  } = useQuery<PagedResponse<Game>>({
    queryKey: ["HomeTeamGamesData", data?.homeTeam?.id],
    queryFn: () => fetchData(`https://api-beta.trybuna.tv/api/Match/team/${data?.homeTeam?.id}`),
    enabled: !!data?.homeTeam?.id,
  });

  const {
    isPending: areAwayTeamGamesPending,
    error: AwayTeanGamesError,
    data: AwayTeamGamesData,
  } = useQuery<PagedResponse<Game>>({
    queryKey: ["AwayTeamGamesData", data?.awayTeam?.id],
    queryFn: () => fetchData(`https://api-beta.trybuna.tv/api/Match/team/${data?.awayTeam?.id}`),
    enabled: !!data?.awayTeam?.id,
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedTab, setSelecteTab] = useState<number | null>(parseInt(searchParams.get("page") ?? "0"));

  const [selectedSecondTab, setSelecteSecondTab] = useState<number | null>(parseInt(searchParams.get("tab") ?? "0"));

  if (isPending || areHomeTeamGamesPending || areAwayTeamGamesPending) return <p>Loading...</p>;

  if (error ?? HomeTeamGamesError ?? AwayTeanGamesError) return <p>An error has occurred {error?.message}</p>;

  const gameDate = new Date(data.date ?? 0);

  const awayVsHomeTeam = AwayTeamGamesData.data.filter((game: Game) => game.awayTeam?.name === data.awayTeam?.name);

  const homeVsAwayTeam = HomeTeamGamesData.data.filter((game: Game) => game.homeTeam?.name === data.homeTeam?.name);

  const tabs: { name: string }[] = [{ name: "Mecz" }, { name: "H2H" }, { name: "Tabela" }, { name: "Składy" }];

  const tabs2: { name: string }[] = [
    { name: `Ogółem` },
    { name: `${data.homeTeam?.name} u siebie` },
    { name: `${data.awayTeam?.name} na wyjeździe` },
  ];

  const selectTabAndChangeUrl = (index: number) => {
    setSelecteTab(index);
    setSearchParams(`page=${index}`);
  };

  const selectSecondTabAndChangeUrl = (index: number) => {
    setSelecteSecondTab(index);
    setSearchParams(`page=${selectedTab}&tab=${index}`);
  };

  return (
    <div className="flex items-center flex-col">
      <p>
        {gameDate.getDate()}.{gameDate.getMonth()}.{gameDate.getFullYear()} {gameDate.getHours()}:
        {gameDate.getUTCMinutes() == 0 ? "00" : gameDate.getUTCMinutes()}
      </p>

      <div className="grid grid-cols-5 gap-1 md:gap-5  mt-7 items-start justify-items-center">
        <div className="translate-y-3 sm:translate-y-10 sm:translate-x-12">
          {data.homeTeam ? (
            <LikeTeamButton teamId={data.homeTeam.id} teamName={data.homeTeam.name}></LikeTeamButton>
          ) : null}
        </div>
        <Link to={`/team/${data.homeTeam?.id}`}>
          <div className="flex flex-col text-center text-xs gap-3 items-center ">
            <img
              src={data.homeTeam?.logoUrl}
              alt={data.homeTeam?.name}
              className="md:size-24 lg:size-28 size-12 rounded-md p-1 bg-white"
            />
            <p>{data.homeTeam?.name}</p>
          </div>
        </Link>

        <span className="text-center font-bold text-nowrap sm:text-2xl md:text-4xl flex justify-center h-full items-center -translate-y-3">
          {data.homeGoals} - {data.awayGoals}
        </span>

        <Link to={`/team/${data.awayTeam?.id}`}>
          <div className="flex flex-col text-center text-xs gap-3 items-center">
            <img
              src={data.awayTeam?.logoUrl}
              alt={data.awayTeam?.name}
              className="md:size-24 lg:size-28 size-12 rounded-md p-1 bg-white"
            />
            <p>{data.awayTeam?.name}</p>
          </div>
        </Link>
        <div className="translate-y-3 sm:translate-y-10 sm:-translate-x-12">
          <LikeTeamButton teamId={data.awayTeam?.id} teamName={data.awayTeam?.name}></LikeTeamButton>
        </div>
      </div>

      <div className="tabs w-full">
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

        <div className={`mecze mt-5 gap-2 flex-col text-xs ${selectedTab === 2 ? "flex" : "hidden"}`}>
          <LeagueProfile leagueId={leagueId} />
        </div>

        <div className={` ${selectedTab === 0 ? "initial" : "hidden"}`}>
          <div className="text-xs uppercase bg-zinc-300 dark:bg-zinc-700 opacity rounded-md p-2 mb-3 mt-5">
            <p>1 Połowa</p>
          </div>
          <div className="flex flex-col w-full justify-between text-sm px-2">
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
          <div className="text-xs uppercase bg-zinc-300 dark:bg-zinc-700 opacity rounded-md p-2 my-3">
            <p>2 Połowa</p>
          </div>
        </div>

        <div className={`mecze mt-3 gap-2 flex-col text-xs ${selectedTab === 1 ? "flex" : "hidden"}`}>
          <div className="tabs">
            <div className="flex flex-row gap-3 flex-wrap justify-center">
              {tabs2.map((button, index) => (
                <SingleTab
                  key={button.name}
                  button={button}
                  index={index}
                  selectTabAndChangeUrl={selectSecondTabAndChangeUrl}
                  selectedTab={selectedSecondTab}
                />
              ))}
            </div>
          </div>
          <div className={`mecze mt-5 gap-2 flex-col text-xs ${selectedSecondTab === 1 ? "flex" : "hidden"}`}>
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
          <div className={`mecze mt-5 gap-2 flex-col text-xs ${selectedSecondTab === 2 ? "flex" : "hidden"}`}>
            {awayVsHomeTeam.reverse().map((mecz: Game, index: number) => (
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

        <div className={` ${selectedTab === 3 ? "initial" : "hidden"}`}>
          <GameDetailsTeams awayTeamPlayers={data.awayPlayers} homeTeamPlayers={data.homePlayers} />
        </div>
      </div>
    </div>
  );
};

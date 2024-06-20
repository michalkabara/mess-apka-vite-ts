import { useParams, useSearchParams } from "react-router-dom";
import { useFetchSingleGame } from "../customHooks/useFetchSIngleGame";
import { SingleTab } from "../components/ui/SingleTab";
import { FC, useState } from "react";

import { Game, PagedResponse } from "../types";
import { LeagueProfile } from "./LeagueProfile";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../clientApi";
import { GameDetailsTeams } from "../components/gameDetails/GameDetailsTeams";
import { GameDetailsPlayers } from "../components/gameDetails/GameDetailsPlayers";
import { GameDetailsEntries } from "../components/gameDetails/GameDetailsEntries";
import { GameDetailsHeadToHead } from "../components/gameDetails/GameDetailsHeadToHead";

import { DateDisplay } from "../components/ui/DateDisplay";

export const GameDetails: FC = () => {
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

  if (isPending || areHomeTeamGamesPending || areAwayTeamGamesPending) return <p>Loading...</p>;

  if (error ?? HomeTeamGamesError ?? AwayTeanGamesError) return <p>An error has occurred {error?.message}</p>;

  const gameDate = new Date(data.date);

  const tabs: { name: string }[] = [{ name: "Mecz" }, { name: "H2H" }, { name: "Tabela" }, { name: "Składy" }];

  const selectTabAndChangeUrl = (index: number) => {
    setSelecteTab(index);
    setSearchParams(`page=${index}`);
  };

  return (
    <div className="flex items-center flex-col">
      <p>
        <DateDisplay gameDate={gameDate} />
      </p>

      <GameDetailsTeams data={data} />

      <div className="w-full">
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
          <GameDetailsEntries events={data.events} />
        </div>

        <div className={`mecze mt-3 gap-2 flex-col text-xs ${selectedTab === 1 ? "flex" : "hidden"}`}>
          <GameDetailsHeadToHead
            HomeTeamGamesData={HomeTeamGamesData}
            AwayTeamGamesData={AwayTeamGamesData}
            data={data}
          />
        </div>

        <div className={`mecze mt-5 gap-2 flex-col text-xs ${selectedTab === 2 ? "flex" : "hidden"}`}>
          <LeagueProfile leagueId={leagueId} />
        </div>

        <div className={` ${selectedTab === 3 ? "initial" : "hidden"}`}>
          <GameDetailsPlayers awayTeamPlayers={data.awayPlayers} homeTeamPlayers={data.homePlayers} />
        </div>
      </div>
    </div>
  );
};

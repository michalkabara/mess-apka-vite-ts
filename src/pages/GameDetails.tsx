import { useParams, useSearchParams } from "react-router-dom";
import { useFetchSingleGame } from "../customHooks/useFetchSIngleGame";
import { SingleTab } from "../components/generic/SingleTab";
import { FC, useState } from "react";
import { PagedResponse } from "../types";
import { Game } from "../types/gameTypes";
import { LeagueProfile } from "./LeagueProfile";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../clientApi";
import { GameDetailsTeams } from "../components/gameDetails/GameDetailsTeams";
import { GameDetailsPlayers } from "../components/gameDetails/GameDetailsPlayers";
import { GameDetailsEntries } from "../components/gameDetails/GameDetailsEntries";
import { GameDetailsHeadToHead } from "../components/gameDetails/GameDetailsHeadToHead";
import { DateDisplay } from "../components/ui/DateDisplay";
import PageTitle from "../components/generic/PageTitle";
import dayjs from "dayjs";

export const GameDetails: FC = () => {
  const { gameId } = useParams();
  const { isPending, error, data } = useFetchSingleGame(gameId);
  const leagueId = data?.leagueId;

  const {
    isPending: areHomeTeamGamesPending,
    error: HomeTeamGamesError,
    data: HomeTeamGamesData,
  } = useQuery<PagedResponse<Game>>({
    queryKey: ["HomeTeamGamesData", data?.homeTeam?.id],
    queryFn: () => fetchData(`${import.meta.env.VITE_API_URL}/Match/team/${data?.homeTeam?.id}`),
    enabled: !!data?.homeTeam?.id,
  });

  const {
    isPending: areAwayTeamGamesPending,
    error: AwayTeanGamesError,
    data: AwayTeamGamesData,
  } = useQuery<PagedResponse<Game>>({
    queryKey: ["AwayTeamGamesData", data?.awayTeam?.id],
    queryFn: () => fetchData(`${import.meta.env.VITE_API_URL}/Match/team/${data?.awayTeam?.id}`),
    enabled: !!data?.awayTeam?.id,
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedTab, setSelecteTab] = useState<number>(parseInt(searchParams.get("page") ?? "0"));

  if (isPending || areHomeTeamGamesPending || areAwayTeamGamesPending) return <p>Loading...</p>;
  if (error ?? HomeTeamGamesError ?? AwayTeanGamesError) return <p>An error has occurred {error?.message}</p>;

  const gameDate = new Date(data.date);
  const tabs: { name: string }[] = [{ name: "Mecz" }, { name: "Head2Head" }, { name: "Tabela" }, { name: "Składy" }];
  const titleDate = dayjs(gameDate).format("DD.MM.YYYY HH:mm");

  const selectTabAndChangeUrl = (index: number) => {
    setSelecteTab(index);
    setSearchParams(`page=${index}`);
  };

  const referees = [data.mainRefereeName, data.assistantRefereeName, data.secondAssistantRefereeName];

  return (
    <div className="flex items-center flex-col">
      <PageTitle title={`HotScore - ${data.homeTeam?.name} - ${data.awayTeam?.name} - ${titleDate}`} />
      <p className="text-sm">
        <DateDisplay gameDate={gameDate} />
      </p>
      <p className="text-xs mt-2 font-semibold dark:text-white">Kolejka {data.round}</p>

      <GameDetailsTeams data={data} />

      <div className="w-full">
        <div className="flex flex-row gap-3 mt-5 flex-wrap justify-center">
          {tabs.map((button, index) => (
            <SingleTab
              key={button.name}
              buttonText={button.name}
              index={index}
              onClick={() => selectTabAndChangeUrl(index)}
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
          <LeagueProfile isLogoVisible={false} leagueId={leagueId} gameData={data} changePageTitle={false} />
        </div>

        <div className={` ${selectedTab === 3 ? "initial" : "hidden"}`}>
          <GameDetailsPlayers
            awayTeamPlayers={data.awayPlayers}
            homeTeamPlayers={data.homePlayers}
            referees={referees}
          />
        </div>
      </div>
    </div>
  );
};

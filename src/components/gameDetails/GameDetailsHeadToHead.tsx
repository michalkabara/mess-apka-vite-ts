import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SingleGame } from "../ui/SingleGame";
import { SingleTab } from "../generic/SingleTab";
import { Game, PartialGame } from "../../types/gameTypes";
import { PagedResponse } from "../../types";
import { GameLink } from "../ui/GameLink";

export const GameDetailsHeadToHead: React.FC<{
  HomeTeamGamesData: PagedResponse<Game>;
  AwayTeamGamesData: PagedResponse<Game>;
  data: Game;
}> = ({ HomeTeamGamesData, AwayTeamGamesData, data }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedTab] = useState<number>(parseInt(searchParams.get("page") ?? "0"));

  const [selectedSecondTab, setSelecteSecondTab] = useState<number>(parseInt(searchParams.get("tab") ?? "0"));

  const awayVsHomeTeam = AwayTeamGamesData.data
    .filter((game: Game) => game.awayTeam?.name === data.awayTeam?.name)
    .filter((game) => game.isFinished === true);

  const homeVsAwayTeam = HomeTeamGamesData.data
    .filter((game: Game) => game.homeTeam?.name === data.homeTeam?.name)
    .filter((game) => game.isFinished === true);

  const previousHomeHeadToHeadGames = HomeTeamGamesData.data.filter(
    (game: Game) => game.homeTeam?.name === data.homeTeam?.name && game.awayTeam?.name === data.awayTeam?.name
  );

  const previousAwayHeadToHeadGames = HomeTeamGamesData.data.filter(
    (game: Game) => game.homeTeam?.name === data.awayTeam?.name && game.awayTeam?.name === data.homeTeam?.name
  );

  const tabs2: { name: string }[] = [
    { name: `Ogółem` },
    { name: `${data.homeTeam?.name} u siebie` },
    { name: `${data.awayTeam?.name} na wyjeździe` },
  ];

  const selectSecondTabAndChangeUrl = (index: number) => {
    setSelecteSecondTab(index);
    setSearchParams(`page=${selectedTab}&tab=${index}`);
  };

  return (
    <>
      <div className="tabs">
        <div className="flex flex-row gap-3 flex-wrap justify-center">
          {tabs2.map((button, index) => (
            <SingleTab
              key={button.name}
              buttonText={button.name}
              index={index}
              onClick={() => selectSecondTabAndChangeUrl(index)}
              selectedTab={selectedSecondTab}
            />
          ))}
        </div>
      </div>
      <div className={`mecze mt-5 gap-2 flex-col text-xs ${selectedSecondTab === 0 ? "flex" : "hidden"}`}>
        {[...previousAwayHeadToHeadGames, ...previousHomeHeadToHeadGames].map((game: Game, index: number) => (
          <GameLink game={game} index={index} key={game.id} />
        ))}
      </div>
      <div className={`mecze mt-5 gap-2 flex-col text-xs ${selectedSecondTab === 1 ? "flex" : "hidden"}`}>
        {homeVsAwayTeam.reverse().map((game: Game, index: number) => (
          <GameLink game={game} index={index} key={game.id} />
        ))}
      </div>
      <div className={`mecze mt-5 gap-2 flex-col text-xs ${selectedSecondTab === 2 ? "flex" : "hidden"}`}>
        {awayVsHomeTeam.reverse().map((game: Game, index: number) => (
          <GameLink game={game} index={index} key={game.id} />
        ))}
      </div>
    </>
  );
};

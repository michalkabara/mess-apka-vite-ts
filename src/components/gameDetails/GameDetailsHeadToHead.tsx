import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SingleGame } from "../ui/SingleGame";
import { SingleTab } from "../generic/SingleTab";
import { PartialGame } from "../../types/gameTypes";
import { PagedResponse } from "../../types";

export const GameDetailsHeadToHead: React.FC<{
  HomeTeamGamesData: PagedResponse<PartialGame>;
  AwayTeamGamesData: PagedResponse<PartialGame>;
  data: PartialGame;
}> = ({ HomeTeamGamesData, AwayTeamGamesData, data }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedTab] = useState<number>(parseInt(searchParams.get("page") ?? "0"));

  const [selectedSecondTab, setSelecteSecondTab] = useState<number>(parseInt(searchParams.get("tab") ?? "0"));

  const awayVsHomeTeam = AwayTeamGamesData.data.filter(
    (game: PartialGame) => game.awayTeam?.name === data.awayTeam?.name
  );

  const homeVsAwayTeam = HomeTeamGamesData.data.filter(
    (game: PartialGame) => game.homeTeam?.name === data.homeTeam?.name
  );

  const previousHomeHeadToHeadGames = HomeTeamGamesData.data.filter(
    (game: PartialGame) => game.homeTeam?.name === data.homeTeam?.name && game.awayTeam?.name === data.awayTeam?.name
  );

  const previousAwayHeadToHeadGames = HomeTeamGamesData.data.filter(
    (game: PartialGame) => game.homeTeam?.name === data.awayTeam?.name && game.awayTeam?.name === data.homeTeam?.name
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
        {[...previousAwayHeadToHeadGames, ...previousHomeHeadToHeadGames].map((mecz: PartialGame, index: number) => (
          <Link
            to={`/game/${mecz.id}`}
            key={`${mecz.id}-${index}`}
            className="flex flex-row border dark:border-zinc-700 items-center w-full content-between hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-md py-2 px-3 ease-in-out duration-500 gap-2"
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
      <div className={`mecze mt-5 gap-2 flex-col text-xs ${selectedSecondTab === 1 ? "flex" : "hidden"}`}>
        {homeVsAwayTeam.reverse().map((mecz: PartialGame, index: number) => (
          <Link
            to={`/game/${mecz.id}`}
            key={`${mecz.id}-${index}`}
            className="flex flex-row border dark:border-zinc-700 items-center w-full content-between hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-md py-2 px-3 ease-in-out duration-500 gap-2"
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
        {awayVsHomeTeam.reverse().map((mecz: PartialGame, index: number) => (
          <Link
            to={`/game/${mecz.id}`}
            key={`${mecz.id}-${index}`}
            className="flex flex-row border dark:border-zinc-700 items-center w-full content-between hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-md py-2 px-3 ease-in-out duration-500 gap-2"
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
    </>
  );
};

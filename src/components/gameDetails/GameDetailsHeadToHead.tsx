import { FC, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SingleGame } from "../generic/SingleGame";
import { SingleTab } from "../ui/SingleTab";
import { PartialGame, PagedResponse } from "../../types";

export const GameDetailsHeadToHead: FC<{
  HomeTeamGamesData: PagedResponse<PartialGame>;
  AwayTeamGamesData: PagedResponse<PartialGame>;
  data: PartialGame;
}> = ({ HomeTeamGamesData, AwayTeamGamesData, data }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedTab] = useState<number | null>(parseInt(searchParams.get("page") ?? "0"));

  const [selectedSecondTab, setSelecteSecondTab] = useState<number | null>(parseInt(searchParams.get("tab") ?? "0"));

  const awayVsHomeTeam = AwayTeamGamesData.data.filter(
    (game: PartialGame) => game.awayTeam?.name === data.awayTeam?.name
  );

  const homeVsAwayTeam = HomeTeamGamesData.data.filter(
    (game: PartialGame) => game.homeTeam?.name === data.homeTeam?.name
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
              button={button}
              index={index}
              selectTabAndChangeUrl={selectSecondTabAndChangeUrl}
              selectedTab={selectedSecondTab}
            />
          ))}
        </div>
      </div>
      <div className={`mecze mt-5 gap-2 flex-col text-xs ${selectedSecondTab === 1 ? "flex" : "hidden"}`}>
        {homeVsAwayTeam.reverse().map((mecz: PartialGame, index: number) => (
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
        {awayVsHomeTeam.reverse().map((mecz: PartialGame, index: number) => (
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
    </>
  );
};

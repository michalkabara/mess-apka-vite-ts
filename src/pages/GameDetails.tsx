import { useParams, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFetchSingleGame } from "../customHooks/useFetchSIngleGame";
import { SingleTab } from "../components/ui/SingleTab";
import { useState } from "react";

export const GameDetails: React.FC = () => {
  const { gameId } = useParams();

  const { isPending, error, data } = useFetchSingleGame(gameId);

  let [searchParams, setSearchParams] = useSearchParams();
  const [selectedTab, setSelecteTab] = useState<number | null>(parseInt(searchParams?.get("page") ?? "0"));

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>An error has occurred {error.message}</p>;

  const gameDate = new Date(data?.date ?? 0);

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
        <div className="flex flex-row gap-3 mt-5">
          {tabs.slice(0, 5).map((button, index) => (
            <SingleTab
              key={button.name}
              button={button}
              index={index}
              selectTabAndChangeUrl={selectTabAndChangeUrl}
              selectedTab={selectedTab}
            />
          ))}
        </div>
        <div className="flex flex-row gap-3 mt-3">
          {tabs.slice(5).map((button, index) => (
            <SingleTab
              key={button.name}
              button={button}
              index={index + 5}
              selectTabAndChangeUrl={selectTabAndChangeUrl}
              selectedTab={selectedTab}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

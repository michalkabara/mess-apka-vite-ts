import zmianaIkona from "../../img/zmiana-ikona.svg";
import { GameEvent } from "../../types/gameTypes";
import { Link } from "react-router-dom";
export const GameDetailsPlayerSwapEntry: React.FC<{
  event: GameEvent;
}> = ({ event }) => {
  return (
    <div className={`flex ${event.isHostEvent ? "flex-row" : "flex-row-reverse"} gap-4 items-center justify-center`}>
      <div
        className={`flex flex-row gap-2 flex-1 justify-end ${event.isHostEvent ? "flex-row" : "flex-row-reverse"} flex-wrap sm:flex-nowrap`}
      >
        <Link to={`/player/${event.swapInfo?.inPlayerId}`} className="hover:underline text-emerald-600">
          {event.swapInfo?.inPlayerName}
        </Link>
        <img src={zmianaIkona} alt="zmiana" className="w-3" />
        <Link to={`/player/${event.swapInfo?.outPlayerId}`} className="hover:underline text-zinc-500">
          {event.swapInfo?.outPlayerName}
        </Link>
      </div>
      <p>{event.displayTime}</p>
      <div className="flex-1"></div>
    </div>
  );
};

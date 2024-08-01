import zmianaIkona from "../../img/zmiana-ikona.svg";
import { GameEvent } from "../../types/gameTypes";
import { Link } from "react-router-dom";
export const GameDetailsPlayerSwapEntry: React.FC<{
  event: GameEvent;
}> = ({ event }) => {
  return (
    <div className={`flex ${event.isHostEvent ? "flex-row" : "flex-row-reverse"} gap-2 items-center`}>
      <div>
        <div className="flex flex-row">
          <div className={`flex ${event.isHostEvent ? "flex-row" : "flex-row-reverse"} gap-2 items-center`}>
            <p>{event.displayTime}</p>

            <Link to={`/player/${event.swapInfo?.inPlayerId}`} className="hover:underline text-emerald-600">
              {event.swapInfo?.inPlayerName}
            </Link>
            <img src={zmianaIkona} alt="zmiana" className="w-3" />

            <Link to={`/player/${event.swapInfo?.outPlayerId}`} className="hover:underline text-zinc-500">
              {event.swapInfo?.outPlayerName}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

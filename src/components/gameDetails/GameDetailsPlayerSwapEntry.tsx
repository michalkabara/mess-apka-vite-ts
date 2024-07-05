import { FaArrowRight } from "react-icons/fa6";
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

            <Link to={`/player/${event.swapInfo?.inPlayerId}`} className="hover:underline text-green-600">
              {event.swapInfo?.inPlayerName}
            </Link>
            <FaArrowRight className={`text-green-600 ${event.isHostEvent ? "rotate-180" : ""}`} />

            <Link to={`/player/${event.swapInfo?.outPlayerId}`} className="hover:underline text-zinc-500">
              {event.swapInfo?.outPlayerName}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

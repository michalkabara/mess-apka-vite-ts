import { FaArrowRight } from "react-icons/fa6";
import { GameEvent, GameEventType } from "../../types/gameTypes";
import { Link } from "react-router-dom";
export const GameDetailsPlayerSwapEntry: React.FC<{
  event: GameEvent;
  nextEvent?: GameEvent;
  previousEvent?: GameEvent;
}> = ({ event, nextEvent, previousEvent }) => {
  return (
    <div className={`flex ${event.isHostEvent ? "flex-row" : "flex-row-reverse"} gap-2 items-center`}>
      <div>
        <div className="flex flex-row">
          {event.eventType === GameEventType.SubIn && (
            <div className={`flex ${event.isHostEvent ? "flex-row" : "flex-row-reverse"} gap-2 items-center`}>
              <p>{event.displayTime}</p>

              <Link to={`/player/${event.playerId}`} className="hover:underline text-green-600">
                {event.playerName}
              </Link>
              <FaArrowRight className={`text-green-600 ${event.isHostEvent ? "rotate-180" : ""}`} />
              {nextEvent?.eventType === GameEventType.SubOut && previousEvent?.eventType !== GameEventType.SubOut && (
                <Link to={`/player/${nextEvent.playerId}`} className="hover:underline text-zinc-500">
                  {nextEvent.playerName}
                </Link>
              )}
              {previousEvent?.eventType === GameEventType.SubOut && (
                <Link to={`/player/${previousEvent.playerId}`} className="hover:underline text-zinc-500">
                  {previousEvent.playerName}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

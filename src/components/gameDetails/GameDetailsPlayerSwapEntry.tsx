import { FaArrowRight } from "react-icons/fa6";
import { GameEvent, GameEventType } from "../../types";

export const GameDetailsPlayerSwapEntry: React.FC<{
  event: GameEvent;
  nextEvent: GameEvent | undefined;
  previousEvent: GameEvent | undefined;
}> = ({ event, nextEvent, previousEvent }) => {
  return (
    <div className={`flex ${event.isHostEvent ? "flex-row" : "flex-row-reverse"} gap-2 items-center`}>
      <div>
        <div className="flex flex-row">
          {event.eventType === GameEventType.SubIn && (
            <div className={`flex ${event.isHostEvent ? "flex-row" : "flex-row-reverse"} gap-2 items-center`}>
              <p>{event.displayTime}</p>
              <p className="text-green-600">{event.playerName}</p>
              <FaArrowRight className={`text-green-600 ${event.isHostEvent ? "rotate-180" : ""}`} />
              {nextEvent?.eventType === GameEventType.SubOut && previousEvent?.eventType !== GameEventType.SubOut && (
                <p className="text-zinc-500">{nextEvent.playerName} AA</p>
              )}
              {previousEvent?.eventType === GameEventType.SubOut && (
                <p className="text-zinc-500">{previousEvent.playerName}</p>
              )}
            </div>
          )}

          {/* {event.eventType === GameEventType.SubOut && nextEvent?.playerName !== event.playerName && (
            <p className="text-red-500">{event.playerName}</p>
          )} */}

          {/* {event.eventType === GameEventType.SubOut && nextEvent?.playerName !== event.playerName && (
            <div className="flex flex-row gap-2 items-center">
              <p>{event.displayTime}</p>
              <p className="text-red-500">{event.playerName}</p>
              <FaArrowRight className="text-red-500" />
              {nextEvent?.eventType === GameEventType.SubIn && nextEvent.playerName !== event.playerName && (
                <p className="text-green-600">{nextEvent.playerName}</p>
              )}
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

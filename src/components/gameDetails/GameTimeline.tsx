import { GameEvent, GameEventType } from "../../types/gameTypes";
import { GameTimelineEvent } from "./GameTimelineEvent";

export const GameTimeline: React.FC<{ events: GameEvent[] }> = ({ events }) => {
  const gameDuration = events.findLast((event) => event.minute === 90 && event.additionalTime);
  const firstHalfDuration = events.find((event) => event.minute === 45 && event.additionalTime);
  const firstHalfDurationDisplay = firstHalfDuration && firstHalfDuration?.minute + firstHalfDuration?.additionalTime;
  const noSwapEvents = events.filter((event) => event.eventType !== GameEventType.SubInOut);
  const groupedEvents = Object.groupBy(noSwapEvents, (event) => event.minute);

  return (
    <>
      <div className="flex relative items-center mt-5">
        <div className="grid relative w-full py-3  items-center grid-cols-[repeat(45,1fr)]">
          {Object.keys(groupedEvents).map((minute, index) => {
            return (
              <div key={`${minute}-${index}`} className="z-10 flex flex-row" style={{ gridColumnStart: minute }}>
                {groupedEvents[parseInt(minute)]
                  ?.filter(
                    (event) =>
                      event.minute + event.additionalTime <= firstHalfDurationDisplay ||
                      event.minute + event.additionalTime <= 45
                  )
                  .map((event, index) => (
                    <GameTimelineEvent key={`${index}-${event.minute}-${event.playerId}`} event={event} />
                  ))}
              </div>
            );
          })}
        </div>

        <div className="dark:bg-red-800 bg-red-500 w-full h-1 rounded-xl absolute"></div>
        <div className="w-full h-1 rounded-xl absolute m-auto flex items-center justify-center">
          <div className="dark:bg-red-800 bg-red-500 w-1 h-5 rounded-xl absolute m-auto"></div>
        </div>
        <div className="grid relative w-full py-3  items-center grid-cols-[repeat(45,1fr)] ">
          {Object.keys(groupedEvents).map((minute, index) => {
            return (
              <div key={`${minute}-${index}`} className="z-10 flex flex-row" style={{ gridColumnStart: +minute - 45 }}>
                {groupedEvents[parseInt(minute)]
                  ?.filter((event) => event.minute > 45)
                  .map((event) => (
                    <GameTimelineEvent key={`${index}-${event.minute}-${event.playerId}`} event={event} />
                  ))}
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-xs grid grid-cols-3 w-full justify-between opacity-65">
        <p>0'</p>
        <p className="text-center">{firstHalfDuration?.displayTime || "45"}'</p>
        <p className="text-right">{gameDuration?.displayTime || "90"}'</p>
      </div>
    </>
  );
};

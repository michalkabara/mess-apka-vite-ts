import { useEffect, useState } from "react";
import { GameEvent, GameEventType } from "../../types/gameTypes";
import { GameDetailsEntry } from "./GameDetailsEntry";
import { GameDetailsPlayerSwapEntry } from "./GameDetailsPlayerSwapEntry";

export const GameDetailsEntries: React.FC<{ events: GameEvent[] }> = ({ events }) => {
  const [rearangedEvents, setRearangedEvents] = useState<GameEvent[]>();

  const rearrangeEvents = (events: GameEvent[]) => {
    for (let i = 0; i < events.length - 1; i++) {
      if (
        (events[i]?.eventType === GameEventType.SubOut && events[i + 1]?.eventType === GameEventType.SubOut) ||
        (events[i]?.eventType === GameEventType.SubIn && events[i + 1]?.eventType === GameEventType.SubIn)
      ) {
        let swapIndex = -1;

        for (let j = i + 2; j < events.length; j++) {
          if (events[j]?.eventType !== GameEventType.SubOut && events[j]?.eventType !== GameEventType.SubIn) {
            swapIndex = j;
            break;
          }
        }

        if (swapIndex !== -1) {
          [events[i + 1], events[swapIndex]] = [events[swapIndex], events[i + 1]];
        } else {
          for (let j = i - 1; j >= 0; j--) {
            if (events[j]?.eventType !== GameEventType.SubOut && events[j]?.eventType !== GameEventType.SubIn) {
              [events[i], events[j]] = [events[j], events[i]];
              break;
            }
          }
        }
      }
    }

    setRearangedEvents(events);
  };

  useEffect(() => {
    rearrangeEvents(events);
  }, [events]);

  return (
    <>
      <div className="text-xs uppercase bg-zinc-200 dark:bg-zinc-800 opacity rounded-md p-2 mb-3 mt-5">
        <p>1 Połowa</p>
      </div>
      <div className="flex flex-col w-full justify-between text-xs px-2 gap-2">
        {rearangedEvents?.map((gameEvent: GameEvent) => {
          if (gameEvent.minute <= 45) {
            if (gameEvent.eventType === GameEventType.SubInOut) {
              return (
                <GameDetailsPlayerSwapEntry
                  key={gameEvent.swapInfo?.inPlayerId + gameEvent.swapInfo?.outPlayerId}
                  event={gameEvent}
                />
              );
            } else {
              return <GameDetailsEntry key={gameEvent.displayTime + gameEvent.playerName} event={gameEvent} />;
            }
          }
        })}
      </div>
      <div className="text-xs uppercase bg-zinc-200 dark:bg-zinc-800 opacity rounded-md p-2 my-3">
        <p>2 Połowa</p>
      </div>
      <div className="flex flex-col w-full justify-between text-xs px-2 gap-2">
        {rearangedEvents?.map((gameEvent: GameEvent) => {
          if (gameEvent.minute > 45) {
            if (gameEvent.eventType === GameEventType.SubInOut) {
              return (
                <GameDetailsPlayerSwapEntry
                  key={gameEvent.swapInfo?.inPlayerId + gameEvent.swapInfo?.outPlayerId}
                  event={gameEvent}
                />
              );
            } else {
              return <GameDetailsEntry key={gameEvent.displayTime + gameEvent.playerName} event={gameEvent} />;
            }
          }
        })}
      </div>
    </>
  );
};

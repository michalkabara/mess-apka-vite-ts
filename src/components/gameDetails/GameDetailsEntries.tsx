import { GameEvent, GameEventType } from "../../types/gameTypes";
import { GameDetailsEntry } from "./GameDetailsEntry";
import { GameDetailsPlayerSwapEntry } from "./GameDetailsPlayerSwapEntry";

export const GameDetailsEntries: React.FC<{ events: GameEvent[] }> = ({ events }) => {
  return (
    <>
      <div className="text-xs uppercase bg-zinc-200 dark:bg-zinc-800 opacity rounded-md p-2 mb-3 mt-5">
        <p>1 Połowa</p>
      </div>
      <div className="flex flex-col w-full justify-between text-xs px-2 gap-3">
        {events?.map((gameEvent: GameEvent) => {
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
      <div className="flex flex-col w-full justify-between text-xs px-2 gap-3">
        {events?.map((gameEvent: GameEvent) => {
          if (gameEvent.minute > 45) {
            if (gameEvent.eventType === GameEventType.SubInOut) {
              return (
                <GameDetailsPlayerSwapEntry
                  key={gameEvent.swapInfo?.inPlayerId + gameEvent.swapInfo?.outPlayerId}
                  event={gameEvent}
                />
              );
            } else {
              return (
                <GameDetailsEntry
                  key={gameEvent.displayTime + gameEvent.playerName + gameEvent.eventType}
                  event={gameEvent}
                />
              );
            }
          }
        })}
      </div>
    </>
  );
};

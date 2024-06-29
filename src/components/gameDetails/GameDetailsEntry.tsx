import { TbRectangleVerticalFilled } from "react-icons/tb";
import { IoMdFootball } from "react-icons/io";
// import { GoArrowSwitch } from "react-icons/go";
import { GameEvent, GameEventType } from "../../types";

export const GameDetailsEntry: React.FC<{ event: GameEvent }> = ({ event }) => {
  return (
    <div className={`flex ${event.isHostEvent ? "flex-row" : "flex-row-reverse"} gap-2 items-center`}>
      <p>{event.displayTime}</p>
      <div>
        {event.eventType === GameEventType.YellowCard && <TbRectangleVerticalFilled className="text-yellow-400" />}

        {event.eventType === GameEventType.RedCard && <TbRectangleVerticalFilled className="text-red-600" />}

        {event.eventType === GameEventType.Goal && (
          <div>
            <IoMdFootball />
          </div>
        )}
      </div>
      <p>{event.playerName}</p>
    </div>
  );
};

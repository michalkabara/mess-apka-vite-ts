import { TbRectangleVerticalFilled } from "react-icons/tb";
import { IoMdFootball } from "react-icons/io";
import { GameEvent, GameEventType } from "../../types/gameTypes";
import { Link } from "react-router-dom";

export const GameDetailsEntry: React.FC<{ event: GameEvent }> = ({ event }) => {
  let eventTypeIcon;

  if (event.eventType === GameEventType.YellowCard) {
    eventTypeIcon = <TbRectangleVerticalFilled className="text-yellow-400" />;
  } else if (event.eventType === GameEventType.RedCard) {
    eventTypeIcon = <TbRectangleVerticalFilled className="text-red-600" />;
  } else if (event.eventType === GameEventType.Goal) {
    eventTypeIcon = <IoMdFootball />;
  } else if (event.eventType === GameEventType.SecondYellowCard) {
    eventTypeIcon = (
      <span className="flex">
        <TbRectangleVerticalFilled className="text-yellow-400" />
        <TbRectangleVerticalFilled className="text-red-600" />
      </span>
    );
  }

  return (
    <div className={`flex ${event.isHostEvent ? "flex-row" : "flex-row-reverse"} gap-4 items-center justify-center`}>
      <div
        className={`flex gap-1 items-center flex-1 justify-end ${event.isHostEvent ? "flex-row" : "flex-row-reverse"}`}
      >
        <Link to={`/player/${event.playerId}`} className="hover:underline">
          {event.playerName}
        </Link>
        <span>{eventTypeIcon}</span>
      </div>
      <p>{event.displayTime}</p>
      <div className="flex-1"></div>
    </div>
  );
};

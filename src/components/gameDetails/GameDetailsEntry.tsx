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
    <div className={`flex ${event.isHostEvent ? "flex-row" : "flex-row-reverse"} gap-2 items-center`}>
      <p>{event.displayTime}</p>
      <span>{eventTypeIcon}</span>
      <Link to={`/player/${event.playerId}`} className="hover:underline">
        {event.playerName}
      </Link>
    </div>
  );
};

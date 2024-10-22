import { TbRectangleVerticalFilled } from "react-icons/tb";
import { GameEvent, GameEventType } from "../../types/gameTypes";
import { IoMdFootball } from "react-icons/io";
import redcard from "@img/czerwona-kartka.svg";
import { Tooltip } from "react-tooltip";

export const GameTimelineEvent: React.FC<{ event: GameEvent }> = ({ event }) => {
  let eventTypeIcon;

  if (event.eventType === GameEventType.YellowCard) {
    eventTypeIcon = <TbRectangleVerticalFilled className="text-yellow-400" />;
  } else if (event.eventType === GameEventType.RedCard) {
    eventTypeIcon = <TbRectangleVerticalFilled className="text-red-600" />;
  } else if (event.eventType === GameEventType.Goal) {
    eventTypeIcon = <IoMdFootball />;
  } else if (event.eventType === GameEventType.OwnGoal) {
    eventTypeIcon = <IoMdFootball className="text-red-600" />;
  } else if (event.eventType === GameEventType.SecondYellowCard) {
    eventTypeIcon = (
      <span className="flex">
        <img src={redcard} alt="" />
      </span>
    );
  } else return;

  return (
    <div
      key={event.displayTime + event.playerName + event.eventType}
      data-tooltip-id="game-event"
      data-tooltip-place="top"
      data-tooltip-html={`<div style="font-size:0.8em; text-align:center">
  <p>${event.displayTime} ${event.playerName}</p>
  ${event.eventType === GameEventType.OwnGoal ? `<p>bramka samobójcza</p>` : ""}
</div>`}
      className={`dark:bg-[#202022] bg-white px-1 size-[22px] items-center z-10 flex`}
    >
      {eventTypeIcon}
      <Tooltip id="game-event" />
    </div>
  );
};

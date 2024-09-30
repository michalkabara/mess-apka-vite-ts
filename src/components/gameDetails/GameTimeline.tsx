import { TbRectangleVerticalFilled } from "react-icons/tb";
import { GameEvent, GameEventType } from "../../types/gameTypes";
import { Tooltip } from "react-tooltip";
import { IoMdFootball } from "react-icons/io";
import redcard from "@img/czerwona-kartka.svg";

export const GameTimeline: React.FC<{ events: GameEvent[] }> = ({ events }) => {
  // const gameDuration = events[events.length - 1]?.minute + events[events.length - 1]?.additionalTime;

  return (
    <>
      <div className="flex flex-row relative w-full py-3 mt-5 items-center">
        {events.map((event) => {
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
                <img src={redcard} alt="" />
              </span>
            );
          } else return;

          return (
            <div
              key={event.displayTime + event.playerName}
              data-tooltip-id="game-event"
              data-tooltip-place="top"
              data-tooltip-html={`<div style="font-size:0.8em">
                  <p>${event.displayTime} ${event.playerName}</p>
                </div>`}
              style={{ left: +event.displayTime.slice(0, 2) + 7 + "%" }}
              className={`absolute dark:bg-[#202022] bg-white px-1 size-[22px] flex items-center`}
            >
              {eventTypeIcon}
              <Tooltip id="game-event" />
            </div>
          );
        })}
        <div className="dark:bg-red-800 bg-red-500 w-full h-1 rounded-xl"></div>
      </div>
      <div className="text-xs flex flex-row justify-between opacity-65">
        <p>0'</p>
        <p>45'</p>
        <p>90'</p>
      </div>
    </>
  );
};

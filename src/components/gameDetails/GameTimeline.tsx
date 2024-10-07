import { TbRectangleVerticalFilled } from "react-icons/tb";
import { GameEvent, GameEventType } from "../../types/gameTypes";
import { Tooltip } from "react-tooltip";
import { IoMdFootball } from "react-icons/io";
import redcard from "@img/czerwona-kartka.svg";

export const GameTimeline: React.FC<{ events: GameEvent[] }> = ({ events }) => {
  // const gameDuration = events[events.length - 1]?.minute + events[events.length - 1]?.additionalTime;

  const gameDuration = events.find((event) => event.minute === 90 && event.additionalTime);
  const firstHalfDuration = events.find((event) => event.minute === 45 && event.additionalTime);

  const noSwapEvents = events.filter((event) => event.eventType !== GameEventType.SubInOut);

  const groupedEvents = Object.groupBy(noSwapEvents, (event) => event.minute);

  return (
    <>
      <div className="grid relative w-full py-3 mt-5 items-center grid-cols-[repeat(90,1fr)]">
        {Object.keys(groupedEvents).map((minute) => {
          return (
            <div key={minute} className="z-10 flex flex-row" style={{ gridColumnStart: minute }}>
              {groupedEvents[parseInt(minute)]?.map((event) => {
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
                    key={event.displayTime + event.playerName + event.eventType}
                    data-tooltip-id="game-event"
                    data-tooltip-place="top"
                    data-tooltip-html={`<div style="font-size:0.8em;background">
                  <p>${event.displayTime} ${event.playerName}</p>
                </div>`}
                    className={`dark:bg-[#202022] bg-white px-1 size-[22px] items-center z-10 flex`}
                  >
                    {eventTypeIcon}
                    <Tooltip id="game-event" />
                  </div>
                );
              })}
            </div>
          );
        })}
        <div className="dark:bg-red-800 bg-red-500 w-full h-1 rounded-xl absolute"></div>
        <div className="w-full h-1 rounded-xl absolute m-auto flex items-center justify-center">
          <div className="dark:bg-red-800 bg-red-500 w-1 h-5 rounded-xl absolute m-auto"></div>
        </div>
      </div>
      <div className="text-xs flex flex-row justify-between opacity-65">
        <p>0'</p>
        <p>{firstHalfDuration?.displayTime || "45"}'</p>
        <p>{gameDuration?.displayTime || "90"}'</p>
      </div>
    </>
  );
};

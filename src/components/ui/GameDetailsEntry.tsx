import { TbRectangleVerticalFilled } from "react-icons/tb";
import { IoMdFootball } from "react-icons/io";
import { GoArrowSwitch } from "react-icons/go";

export const GameDetailsEntry: React.FC<{
  time: string;
  type: "yellow" | "red" | "swap" | "goal";
  penalty?: boolean;
  order: "left" | "right";
}> = ({ time, type, penalty, order = "left" }) => {
  return (
    <div className={`flex ${order === "left" ? "flex-row" : "flex-row-reverse"} gap-2 items-center`}>
      <p>{time}'</p>
      <div>
        {type === "yellow" && <TbRectangleVerticalFilled className="text-yellow-400" />}

        {type === "red" && <TbRectangleVerticalFilled className="text-red-600" />}

        {type === "goal" && (
          <div>
            <IoMdFootball />
            <p>{penalty && "(Rzut karny)"}</p>
          </div>
        )}

        {type === "swap" && <GoArrowSwitch />}
      </div>
      <p>Zawodnik</p>
    </div>
  );
};

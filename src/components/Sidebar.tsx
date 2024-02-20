import { RiTeamLine, RiTrophyLine, RiStarSmileFill } from "react-icons/ri";

export const Sidebar = () => {
  return (
    <div className="text-white text-sm flex flex-col gap-4">
      <div>
        <div className="flex flex-row gap-2 items-center">
          <h3 className="font-bold mb-2">Moje Ligi</h3>
          <RiTrophyLine className="-translate-y-1" />
        </div>

        <div className="flex flex-col gap-2">
          <a href="#">Liga I</a>
          <a href="#">Liga II</a>
          <a href="#">Liga III</a>
        </div>
      </div>
      <div>
        <div className="flex flex-row gap-2 items-center">
          <h3 className="font-bold mb-2">Moje Drużyny</h3>
          <RiTeamLine className="-translate-y-1" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2 items-center">
            Ruchowa <RiStarSmileFill className="text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

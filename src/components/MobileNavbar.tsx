import { RiStarSmileFill } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Sidebar } from "./Sidebar";

export const MobileNavbar: React.FC = () => {
  const [isMenuVisible, setisMenuVisible] = useState(false);
  const [isSidebarVisible, setisSidebarVisible] = useState(false);

  return (
    <div className="flex items-center justify-between w-full relative">
      <RiStarSmileFill
        className="size-7"
        onClick={() => {
          setisSidebarVisible((prev) => !prev);
        }}
      />
      <IoMenu
        className="size-7"
        onClick={() => {
          setisMenuVisible((prev) => !prev);
        }}
      />

      <div
        className={`${
          isSidebarVisible ? "flex" : "hidden"
        } items-end gap-4 text-zinc-800 dark:text-zinc-100 text-sm absolute flex-col bg-zinc-800 left-0 top-10 py-5 px-8 z-10 rounded-md shadow-lg`}
      >
        <Sidebar />
      </div>

      <div
        className={`${
          isMenuVisible ? "flex" : "hidden"
        } items-end gap-4 text-zinc-800 dark:text-zinc-100 text-sm absolute flex-col bg-zinc-800 right-0 top-10 py-5 px-8 z-10 rounded-md shadow-lg`}
      >
        <a href="#">Liga IV</a>
        <a href="#">Liga V</a>
        <Link to="/">Okręgówka</Link>
        <a href="#">A klasa</a>
        <a href="#">B klasa</a>
      </div>
    </div>
  );
};

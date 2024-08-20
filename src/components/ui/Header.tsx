import { Link } from "react-router-dom";
import { LuSun, LuMoon } from "react-icons/lu";
import { RiUser3Line } from "react-icons/ri";
import { useState } from "react";
import trybunaLogo from "../../img/trybuna_tv_logo_white.png";
import hotscoreLogo from "../../img/hotscore_logo_white.png";

import { IoSearchSharp } from "react-icons/io5";
import SearchModal from "./SearchModal";

export const Header: React.FC<{ isDarkModeOn: boolean; setIsDarkModeOn: (prevState: boolean) => void }> = ({
  isDarkModeOn,
  setIsDarkModeOn,
}) => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkModeOn(!isDarkModeOn);
  };

  return (
    <div
      className={`flex items-center justify-between py-2 px-5 text-zinc-800 dark:text-white gap-7 w-full max-w-[1200px]`}
    >
      <Link to={""}>
        <img src={hotscoreLogo} alt="" className="w-32" />
      </Link>

      <div
        className={`${
          isSearchModalOpen ? "opacity-100" : " opacity-0 pointer-events-none"
        } absolute flex justify-center transition-all duration-300 w-full top-16 z-50 left-[-10px] shadow-lg`}
      ></div>

      <div className="flex flex-row gap-5 items-center">
        {/* <Link to="/login">
          <button className="flex flex-row gap-2 items-center  bg-[#ed4535] py-2 px-3 rounded-lg text-zinc-100">
            <span className="text-sm">Zaloguj</span>
            <RiUser3Line className="size-4" />
          </button>
        </Link> */}
        <button className="text-xs flex flex-row items-center gap-3" onClick={() => setIsSearchModalOpen(true)}>
          <IoSearchSharp className="text-lg" />
          Szukaj
        </button>
        <SearchModal
          open={isSearchModalOpen}
          setIsSearchModalOpen={setIsSearchModalOpen}
          onClose={() => setIsSearchModalOpen(false)}
        />

        <button
          className="flex flex-row gap-2 items-center bg-zinc-200 dark:bg-zinc-700 justify-center rounded-lg size-9"
          onClick={toggleDarkMode}
        >
          {isDarkModeOn ? <LuSun className="size-4 text-zinc-100" /> : <LuMoon className="size-4 text-zinc-700" />}
        </button>
      </div>
    </div>
  );
};

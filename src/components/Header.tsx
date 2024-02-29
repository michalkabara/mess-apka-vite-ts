import { Link } from "react-router-dom";

import { LuSun, LuMoon } from "react-icons/lu";
import { RiUser3Line } from "react-icons/ri";

export const Header: React.FC<{ isDarkModeOn: boolean; setIsDarkModeOn: (prevState: boolean) => void }> = ({
  isDarkModeOn,
  setIsDarkModeOn,
}) => {
  const toggleDarkMode = () => {
    setIsDarkModeOn(!isDarkModeOn);
  };

  return (
    <div className={`flex items-center justify-between py-3 px-5 text-zinc-800 dark:text-white w-full max-w-[1200px]`}>
      <Link to={""}>
        <span>logo</span>
      </Link>

      <input
        type="text"
        placeholder="Search"
        className="border px-2 py-1 rounded-md border-zinc-400 bg-zinc-200 placeholder:text-zinc-800 dark:border-zinc-500 dark:bg-zinc-700 dark:placeholder:text-zinc-200 placeholder:text-sm"
      />

      <div className="flex flex-row gap-2">
        <button className="flex flex-row gap-2 items-center  bg-[#ed4535] py-2 px-3 rounded-lg text-zinc-100">
          <span className="text-sm">Login</span>
          <RiUser3Line className="size-4" />
        </button>

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

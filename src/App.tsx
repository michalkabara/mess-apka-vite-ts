import "react-tooltip/dist/react-tooltip.css";

import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { FeaturedGame } from "./components/FeaturedGame";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (prefersDark) {
      setIsDarkModeOn(true);
    }
  }, []);

  return (
    <div className={`${isDarkModeOn ? "dark" : "bg-zinc-100"} m-auto  dark:bg-zinc-900 relative `}>
      <header className="bg-zinc-300 dark:bg-zinc-800 flex flex-col items-center">
        <Header isDarkModeOn={isDarkModeOn} setIsDarkModeOn={setIsDarkModeOn} />
      </header>
      <nav className="mb-2 flex flex-col w-full items-center border-b dark:border-zinc-700 border-zinc-300">
        <Navbar />
      </nav>

      <div className="flex items-center flex-col">
        <div className="w-full flex flex-row gap-4 mt-1 py-2 px-5 max-w-[1200px]">
          <div className=" w-[140px] text-left min-w-[130px]">
            <Sidebar />
          </div>
          <div className=" w-full bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300 rounded-lg p-5 relative">
            <Outlet />
          </div>
          <div className="w-[400px] flex flex-col gap-3 max-lg:hidden">
            <FeaturedGame />
            <div className="bg-slate-500 ">reklamy</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

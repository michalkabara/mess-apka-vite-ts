import "react-tooltip/dist/react-tooltip.css";

import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { FeaturedGame } from "./components/FeaturedGame";
import { MobileNavbar } from "./components/MobileNavbar";
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Footer } from "./components/ui/Footer";

function App() {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  const { pathname } = useLocation();

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

      <div className="border-b dark:border-zinc-700 border-zinc-300">
        <nav className=" flex w-full items-center  py-3 px-5 max-w-[1200px] m-auto">
          <div className="max-sm:hidden">
            <Navbar />
          </div>

          <div className="sm:hidden w-full">
            <MobileNavbar />
          </div>
        </nav>
      </div>

      <div className="flex items-center flex-col">
        <div className="w-full flex flex-row gap-4 mt-1 py-2 px-5 max-w-[1200px]">
          {pathname !== "/login" && (
            <div className="max-sm:hidden w-[140px] text-left min-w-[130px]">
              <Sidebar />
            </div>
          )}
          <div className=" w-full bg-zinc-200 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-300 rounded-lg p-5 relative">
            <Outlet />
          </div>
          {pathname !== "/login" && (
            <div className="w-[400px] flex flex-col gap-3 max-lg:hidden">
              <FeaturedGame />
              <div className="bg-slate-500 ">reklamy</div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

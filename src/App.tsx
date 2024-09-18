import "react-tooltip/dist/react-tooltip.css";

import { Header } from "./components/ui/Header";
import { Sidebar } from "./components/sidebar/Sidebar";
import { FeaturedGame } from "./components/ui/FeaturedGame";
import { MobileNavbar } from "./components/mobile/MobileNavbar";
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Footer } from "./components/ui/Footer";
import { HomePageBlog } from "./components/generic/HomePageBlog";

import { HomeSlider } from "./components/ui/HomeSlider";

function App() {
  const [isDarkModeOn, setIsDarkModeOn] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkModeOn(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkModeOn(false);
    }
  }, []);

  return (
    <div className={"dark:bg-zinc-900 bg-zinc-100 m-auto relative overflow-auto flex flex-col min-h-[100vh]"}>
      <header className="bg-[#ed4535] flex flex-col items-center">
        <Header isDarkModeOn={isDarkModeOn} setIsDarkModeOn={setIsDarkModeOn} />
      </header>

      <div className="border-b dark:border-zinc-700 border-zinc-300 z-50">
        <nav className=" flex w-full items-center sm:py-0 py-3 px-5 max-w-[1200px] m-auto">
          <div className="sm:hidden w-full">
            <MobileNavbar />
          </div>
        </nav>
      </div>

      <div className="flex items-center flex-col mt-2">
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6504994952505699"
          crossOrigin="anonymous"
        ></script>

        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-6504994952505699"
          data-ad-slot="2819549773"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        <div className="w-full flex flex-row gap-4 mt-1 py-2 px-5 max-w-[1200px]">
          <div className="max-sm:hidden w-[190px] text-left min-w-[190px]">
            <Sidebar />
          </div>
          <div className="w-full flex flex-col gap-4 overflow-auto">
            {pathname === "/" && <HomeSlider />}
            <div className=" bg-white dark:bg-zinc-800 dark:bg-opacity-50 text-zinc-800 dark:text-zinc-300 rounded-lg sm:p-5 p-2 relative  dark:border-zinc-700 overflow-hidden">
              <Outlet />
            </div>
          </div>

          <div className="min-w-[100px] w-[550px] flex flex-col gap-4 max-lg:hidden">
            <FeaturedGame />
            <HomePageBlog></HomePageBlog>
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6504994952505699"
              crossOrigin="anonymous"
            ></script>

            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-6504994952505699"
              data-ad-slot="6386996367"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;

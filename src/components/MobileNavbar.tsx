import { RiStarSmileFill } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { useFetchLeagues } from "../customHooks/useFetchLeagues";

export const MobileNavbar: React.FC = () => {
  const [isMenuVisible, setisMenuVisible] = useState(false);
  const [isSidebarVisible, setisSidebarVisible] = useState(false);

  const { isPending, error, data } = useFetchLeagues();

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>An error has occurred {error.message}</p>;

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
        {data.map((voivodeship) => (
          <Link key={voivodeship.id} to={`/voivode/${voivodeship.id}`}>
            {voivodeship.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

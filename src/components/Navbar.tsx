import { Link } from "react-router-dom";
import { useFetchLeagues } from "../customHooks/useFetchLeagues";
import { useState, useEffect, useRef } from "react";
// import { IoMenu } from "react-icons/io5";
import { GiPoland } from "react-icons/gi";

export const Navbar = () => {
  const { isPending, error, data } = useFetchLeagues();
  const [isMenuVisible, setisMenuVisible] = useState(false);

  const dropdownVoivodeButton = useRef(null);
  const dropdownMenu = useRef(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (!dropdownMenu.current.contains(e.target) && e.target !== dropdownVoivodeButton.current) {
      setisMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  if (isPending) return <p>Loading...</p>;

  if (error) return <p>An error has occurred {error.message}</p>;

  return (
    <>
      <div
        ref={dropdownVoivodeButton}
        className="flex flex-row text-xs items-center gap-2 p-2 bg-zinc-700 rounded-md hover:bg-zinc-600 transition-colors ease-in-out cursor-pointer"
        onClick={() => {
          setisMenuVisible((prev) => !prev);
        }}
      >
        <GiPoland className="size-4" />
        Wybierz województwo
      </div>

      <div
        ref={dropdownMenu}
        className={`${
          isMenuVisible ? "flex" : "hidden"
        } items-start gap-1 text-zinc-800 dark:text-zinc-100 text-sm absolute flex-col bg-zinc-800 left-0 top-10 py-5 px-3 z-10 rounded-md shadow-lg`}
      >
        {data.map((voivodeship) => (
          <Link
            className="hover:bg-zinc-700 transition-colors ease-in-out px-3 py-2 w-full rounded-md"
            key={voivodeship.id}
            to={`/voivode/${voivodeship.id}`}
          >
            {voivodeship.name}
          </Link>
        ))}
      </div>
    </>
  );
};

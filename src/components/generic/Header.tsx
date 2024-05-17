import { Link } from "react-router-dom";
import { LuSun, LuMoon } from "react-icons/lu";
import { RiUser3Line } from "react-icons/ri";
import { UserButton, useUser } from "@clerk/clerk-react";
import { SearchResults } from "../ui/SearchResults";
import { FC, useState } from "react";
// import { useFetchTeams } from "../customHooks/useFetchTeams";

export const Header: FC<{ isDarkModeOn: boolean; setIsDarkModeOn: (prevState: boolean) => void }> = ({
  isDarkModeOn,
  setIsDarkModeOn,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const { isSignedIn, user, isLoaded } = useUser();

  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // const { isPending, error, data } = useFetchTeams();

  // console.log(data);

  // const filteredItems = useMemo(() => {
  //   return data?.filter((item) => item.TeamName.toLowerCase().includes(searchQuery.toLocaleLowerCase()));
  // }, [data, searchQuery]);

  // if (isPending) return <p>Loading...</p>;

  // if (error) return <p>An error has occurred {error.message}</p>;

  const toggleDarkMode = () => {
    setIsDarkModeOn(!isDarkModeOn);
  };

  if (!isLoaded) {
    // Handle loading state however you like
    return null;
  }

  return (
    <div className={`flex items-center justify-between py-2 px-5 text-zinc-800 dark:text-white w-full max-w-[1200px]`}>
      <Link to={""}>
        <span>logo</span>
      </Link>

      <div
        className={`${
          isSearchModalOpen ? "opacity-100" : " opacity-0 pointer-events-none"
        } absolute flex justify-center transition-all duration-300 w-full top-16 z-20 left-[-10px] shadow-lg`}
      >
        <SearchResults />
      </div>

      <input
        type="text"
        placeholder="Search"
        className="max-[480px]:hidden w-4xl border px-2 py-1 rounded-md border-[#ed4535] bg-zinc-200 placeholder:text-zinc-800 dark:border-[#ed4535] dark:bg-[#c53528] dark:placeholder:text-zinc-200 placeholder:text-sm"
        onFocus={() => {
          if (searchQuery) {
            setIsSearchModalOpen(true);
          }
          return;
        }}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        onInput={() => {
          setIsSearchModalOpen(true);
        }}
        onBlur={() => {
          setIsSearchModalOpen(false);
        }}
      />

      <div className="flex flex-row gap-3 items-center">
        {isSignedIn ? (
          <UserButton key={user.username} />
        ) : (
          <Link to="/login">
            <button className="flex flex-row gap-2 items-center  bg-[#ed4535] py-2 px-3 rounded-lg text-zinc-100">
              <span className="text-sm">Login</span>
              <RiUser3Line className="size-4" />
            </button>
          </Link>
        )}

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

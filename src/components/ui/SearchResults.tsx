import { FC } from "react";

export const SearchResults: FC = ({}) => {
  const handleMenuItemClick = () => {
    const elem = document.activeElement as HTMLElement;
    elem.blur();
    // setIsMenuOpen(false);
  };

  return (
    <div className="p-3 rounded-md bg-zinc-700 w-[550px]">
      <p className="mt-2 text-center text-sm opacity-60">Search results:</p>

      <div onClick={handleMenuItemClick} className="text-sm my-1 hover:bg-zinc-800 p-2  rounded-md cursor-pointer">
        <span className={`text-green-400`}>drużyna: </span>
        Rzuchowa
      </div>

      <div className="text-sm my-1 hover:bg-zinc-800 p-2  rounded-md cursor-pointer">
        <span className="text-blue-400">zawodnik: </span>Ruchowa
      </div>
      <div className="text-sm my-1 hover:bg-zinc-800 p-2  rounded-md cursor-pointer">
        <span className="text-orange-400">liga: </span>TARNÓW II (ŻABNO-TARNÓW)
      </div>
    </div>
  );
};

import { RiStarSmileFill } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { Sidebar } from "./Sidebar";
import { VoivodeDropdown } from "./VoivodeDropdown";
import { useRef, useState } from "react";

export const MobileNavbar: React.FC = () => {
  const [isFavouritesMenuOpen, setIsFavouritesMenuOpen] = useState(false);

  const [isVoivodesMenuOpen, setIsVoivodeMenuOpen] = useState(false);

  const comboBoxInputRef = useRef<HTMLInputElement>(null);

  const handleMenuItemClick = () => {
    const elem = document.activeElement as HTMLElement;
    elem.blur();
    setIsVoivodeMenuOpen(false);
    setIsFavouritesMenuOpen(false);
  };

  return (
    <div className="flex items-center justify-between w-full relative">
      <div
        tabIndex={0}
        role="button"
        onClick={() => {
          setIsFavouritesMenuOpen((prev) => !prev);
          setIsVoivodeMenuOpen(false);
        }}
      >
        <RiStarSmileFill className="size-7 dropdown" />
      </div>

      {isFavouritesMenuOpen && (
        <div
          tabIndex={0}
          className="w-full dropdown-content z-[1] menu items-end gap-4 text-zinc-800 dark:text-zinc-100 text-sm absolute flex-col bg-zinc-800 left-0 top-10 p-5 rounded-lg shadow-lg "
        >
          <Sidebar handleMenuItemClick={handleMenuItemClick} />
        </div>
      )}

      <div
        tabIndex={1}
        role="button"
        onClick={() => {
          setIsVoivodeMenuOpen((prev) => !prev);
          setIsFavouritesMenuOpen(false);
        }}
      >
        <IoMenu className="size-7 dropdown" />
      </div>

      {isVoivodesMenuOpen && (
        <div className="dropdown-end absolute right-0 top-8 z-20 w-full">
          <VoivodeDropdown comboBoxInputRef={comboBoxInputRef} handleMenuItemClick={handleMenuItemClick} />
        </div>
      )}
    </div>
  );
};

import { useState, useRef, useEffect, MouseEventHandler } from "react";
// import { IoMenu } from "react-icons/io5";
import { GiPoland } from "react-icons/gi";
import { VoivodeDropdown } from "./VoivodeDropdown";

export const VoivodeDropdownButton = () => {
  const dropdownVoivodeButtonRef = useRef(null);
  const dropdownVoivodeMenuRef = useRef<HTMLInputElement>(null);
  const comboBoxInputRef = useRef<HTMLInputElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    const elem = document.activeElement as HTMLElement;
    elem.blur();
    setIsMenuOpen(false);
  };

  const handleMenuToggle = (e: MouseEventHandler<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
    // comboBoxInputRef.current?.focus();
  };

  useEffect(() => {
    const handleCloseMenu = (e: MouseEventHandler<HTMLButtonElement>) => {
      if (e.target != dropdownVoivodeButtonRef.current) {
        setIsMenuOpen(false);
      }

      if (e.target === comboBoxInputRef.current) {
        setIsMenuOpen(true);
      }
    };
    document.addEventListener("click", handleCloseMenu);

    return () => {
      document.removeEventListener("click", handleCloseMenu);
    };
  }, []);

  return (
    <>
      <button
        tabIndex={0}
        role="button"
        onClick={handleMenuToggle}
        ref={dropdownVoivodeButtonRef}
        className="flex flex-row text-xs items-center gap-2 px-2 py-2 bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors ease-in-out cursor-pointer border border-zinc-700"
      >
        <GiPoland className="size-4" />
        <span className="truncate">Wybierz województwo</span>
      </button>

      {isMenuOpen && (
        <div className="absolute z-20 left-0 top-8" ref={dropdownVoivodeMenuRef}>
          <VoivodeDropdown comboBoxInputRef={comboBoxInputRef} handleMenuItemClick={handleMenuItemClick} />
        </div>
      )}
    </>
  );
};

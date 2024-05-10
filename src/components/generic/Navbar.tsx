import { useState, useRef, useEffect } from "react";
// import { IoMenu } from "react-icons/io5";
import { GiPoland } from "react-icons/gi";
import { VoivodeDropdown } from "./VoivodeDropdown";

export const Navbar = () => {
  const dropdownVoivodeButtonRef = useRef(null);
  const dropdownVoivodeMenuRef = useRef<HTMLInputElement>(null);
  const comboBoxInputRef = useRef<HTMLInputElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    const elem = document.activeElement as HTMLElement;
    elem.blur();
    setIsMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
    // comboBoxInputRef.current?.focus();
  };

  useEffect(() => {
    const handleCloseMenu = (e: MouseEvent) => {
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
        className="flex flex-row text-xs items-center gap-2 p-2 bg-zinc-700 rounded-md hover:bg-zinc-600 transition-colors ease-in-out cursor-pointer"
      >
        <GiPoland className="size-4" />
        Wybierz województwo
      </button>

      {isMenuOpen && (
        <div className="absolute z-20 left-0" ref={dropdownVoivodeMenuRef}>
          <VoivodeDropdown comboBoxInputRef={comboBoxInputRef} handleMenuItemClick={handleMenuItemClick} />
        </div>
      )}
    </>
  );
};

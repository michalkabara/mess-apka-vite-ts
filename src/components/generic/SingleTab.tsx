import { MouseEventHandler } from "react";

interface Tab {
  buttonText?: string;
  index: number | string | undefined;
  onClick: MouseEventHandler;
  selectedTab: number | string | undefined;
}

export const SingleTab: React.FC<Tab> = ({ buttonText, index, onClick, selectedTab }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        selectedTab === index
          ? "active bg-[#ed4535] dark:bg-[#ed4535] dark:hover:bg-[#d63c2e] text-zinc-100"
          : "dark:bg-zinc-900 border dark:border-zinc-700 border-zinc-300 bg-zinc-100 dark:hover:bg-zinc-800"
      } px-3 p-2 rounded-lg hover:bg-zinc-300 hover:text-zinc-700 dark:hover:text-zinc-100  transition duration-200 text-xs`}
    >
      {buttonText}
    </button>
  );
};

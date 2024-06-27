import { FC } from "react";

interface Tab {
  button: { name: string };
  index: number;
  selectTabAndChangeUrl: (index: number) => void;
  selectedTab: number | null;
}

export const SingleTab: FC<Tab> = ({ button, index, selectTabAndChangeUrl, selectedTab }) => {
  return (
    <button
      onClick={() => {
        selectTabAndChangeUrl(index);
      }}
      className={`${
        selectedTab === index
          ? "active bg-[#ed4535] dark:bg-[#ed4535] dark:hover:bg-[#d63c2e] text-zinc-100"
          : "dark:bg-zinc-900 border dark:border-zinc-700 border-zinc-300 bg-zinc-100 dark:hover:bg-zinc-800"
      } px-3 p-2 rounded-lg hover:bg-zinc-300 hover:text-zinc-700 dark:hover:text-zinc-100  transition duration-200 text-xs`}
    >
      {button.name}
    </button>
  );
};

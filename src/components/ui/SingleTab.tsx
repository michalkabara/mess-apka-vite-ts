import React from "react";

type TabType = {
  button: { name: string };
  index: number;
  selectTabAndChangeUrl: (index: number) => void;
  selectedTab: number | null;
};

export const SingleTab: React.FC<TabType> = ({ button, index, selectTabAndChangeUrl, selectedTab }) => {
  return (
    <button
      onClick={() => selectTabAndChangeUrl(index)}
      className={`${
        selectedTab === index ? "active bg-cyan-700 dark:bg-slate-700 text-zinc-100" : "dark:bg-zinc-700 bg-zinc-100"
      } p-3  rounded-lg hover:bg-zinc-300 hover:text-zinc-700 dark:hover:text-zinc-100 dark:hover:bg-zinc-900 transition duration-200 text-xs`}
    >
      {button.name}
    </button>
  );
};
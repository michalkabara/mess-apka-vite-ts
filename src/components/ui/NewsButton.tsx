import { FaRegNewspaper } from "react-icons/fa6";

export const NewsButton = () => {
  return (
    <button className="flex flex-row gap-2 items-center bg-[#ed4535] hover:bg-[#d63c2e] rounded-md px-2 py-2 cursor-pointer transition-colors ease-in-out text-zinc-100">
      <FaRegNewspaper className="" />
      <h3 className="font-bold text-xs">News</h3>
    </button>
  );
};

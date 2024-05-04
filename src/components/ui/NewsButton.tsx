import { FaRegNewspaper } from "react-icons/fa6";

export const NewsButton = () => {
  return (
    <div className="flex flex-row gap-2 items-center bg-[#ed4535] hover:bg-[#d63c2e] rounded-md px-2 py-1 mb-2 cursor-pointer transition-colors ease-in-out text-zinc-100">
      <h3 className="font-bold ">News</h3>
      <FaRegNewspaper className="" />
    </div>
  );
};

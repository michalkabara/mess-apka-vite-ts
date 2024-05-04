import { FaSquareXTwitter, FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <div>
      <div className="dark:bg-zinc-800 dark:text-zinc-100 bg-zinc-300 text-zinc-800 mt-10 m-auto">
        <div className="max-w-[1200px] w-full m-auto min-h-11 text-sm px-5 py-10 flex flex-row gap-10 flex-wrap sm:flex-nowrap">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quae reprehenderit blanditiis. Ipsam
            incidunt placeat temporibus nihil accusantium odit ratione quam fuga. Repellat cupiditate aliquam similique,
            odit sint officia. Explicabo?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet optio dicta facere voluptatem maxime neque
            assumenda doloremque iusto voluptas aspernatur corrupti ex libero quidem dolore eaque iure, quo cum eius?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum doloremque voluptates est! Minus excepturi
            dolorem in harum, non doloremque beatae iusto sequi doloribus iure quasi. Rem explicabo debitis laborum
            velit!
          </p>
        </div>
      </div>
      <div className=" bg-zinc-200 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-100">
        <div className="max-w-[1200px] text-xs p-5 flex justify-between items-center  m-auto">
          <p>&copy; Trybuna.tv 2024</p>
          <div className="flex flex-row gap-2 text-xl items-center content-center">
            <FaSquareFacebook className="size-5" />
            <FaSquareXTwitter className="size-5" />
            <FaYoutube className="size-5" />
            <FaSquareInstagram className="size-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

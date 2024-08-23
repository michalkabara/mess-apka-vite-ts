import { FaSquareXTwitter, FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import regulamin from "../../documents/Regulamin_HotScore.pdf";

export const Footer = () => {
  return (
    <div>
      <div className="dark:bg-zinc-800 dark:text-zinc-100 bg-zinc-300 text-zinc-800 mt-10 m-auto">
        <div className="max-w-[1200px] w-full m-auto min-h-11 text-xs px-5 py-10 flex flex-row gap-10 flex-wrap sm:flex-nowrap leading-6">
          <a href={regulamin} target="_blank">
            Regulamin
          </a>
          {/* <a href="">Reklama</a>
          <a href="">Kontakt</a> */}
        </div>
      </div>
      <div className=" bg-zinc-200 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-100">
        <div className="max-w-[1200px] text-xs p-5 flex justify-between items-center  m-auto">
          <p>&copy; HotScore.pl 2024</p>
          <div className="flex flex-row gap-2 text-xl items-center content-center opacity-60">
            <a href="https://www.facebook.com/TrybunaTV/" target="_blank">
              <FaSquareFacebook className="size-5" />
            </a>
            <a href="https://www.instagram.com/trybunatv/" target="_blank">
              <FaSquareInstagram className="size-5" />
            </a>
            <a href="https://x.com/trybunatv" target="_blank">
              <FaSquareXTwitter className="size-5" />
            </a>
            <a href="https://www.youtube.com/@TrybunaTV" target="_blank">
              <FaYoutube className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

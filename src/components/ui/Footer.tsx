import { FaSquareXTwitter, FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import regulamin from "../../documents/Regulamin_HotScore.pdf";
import { ContactForm } from "./ContactForm";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { Link } from "react-router-dom";
import hostscoreLogo from "../../img/hostcore_logo_white_red.svg";

export const Footer = () => {
  return (
    <div>
      <div className="dark:bg-zinc-800 dark:text-zinc-50 bg-zinc-200 text-zinc-800 mt-10 m-auto flex">
        <div className="max-w-[1200px] m-auto min-h-11 text-xs px-5 py-10 flex flex-row gap-6 flex-wrap sm:flex-nowrap leading-6 justify-center">
          <div className="flex flex-col gap-4 w-full sm:w-1/2 ">
            <img src={hostscoreLogo} alt="HotScore" className="w-52" />
            <p className="sm:w-3/4 w-full text-justify">
              Aktualne wyniki meczów oraz szczegółowe statystyki z rozgrywek lig 4, 5 i okręgowej. Śledź ulubione
              drużyny i bądź na bieżąco z każdą akcją, niezależnie od miejsca, w którym się znajdujesz!
            </p>
            <div className="flex flex-col gap-1 flex-wrap sm:flex-nowrap w-fit">
              <Link className="hover:text-red-500" to="/">
                Strona Główna
              </Link>
              <Link to="/blog">Blog</Link>
              <a href={regulamin} target="_blank">
                Regulamin
              </a>
            </div>
            <div className="flex flex-row gap-2 text-xl items-center content-center opacity-60">
              <a href="https://www.facebook.com/TrybunaTV/" target="_blank" className="">
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

          <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_CAPTCHA_SITE_KEY}>
            <ContactForm />
          </GoogleReCaptchaProvider>
        </div>
      </div>
      <div className=" bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-100 py-5">
        <div className="max-w-[1200px] text-xs p-1 flex flex-col justify-between items-center m-auto gap-5">
          <p>&copy; HotScore.pl 2024</p>
        </div>
      </div>
    </div>
  );
};

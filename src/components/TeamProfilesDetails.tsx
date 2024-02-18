import defaultCrest from "../img/crest_default.svg";
import {
  FaSquareXTwitter,
  FaSquareYoutube,
  FaSquareFacebook,
  FaSquareInstagram,
} from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";

export const TeamProfileDetails = ({ teamLogo, teamName }) => {
  return (
    <div className="league-name pt-4 flex items-start flex-row gap-5">
      {teamLogo ? (
        <img src={teamLogo} alt={teamName} className="w-[100px]" />
      ) : (
        <img src={defaultCrest} alt="Herb" className="w-20" />
      )}
      <div className="flex flex-col gap-3">
        <span className="text-lg font-bold uppercase">{teamName}</span>
        <div className="text-sm">
          <p>
            <b>Rok założenia:</b> 1982
          </p>
          <p>
            <b>Barwy klubu:</b> czarno zielono białe
          </p>
          <p>
            <b>Rozgrywki:</b> Liga Okręgowa (link)
          </p>
          <p>
            <b>Sezon:</b> 2023/24
          </p>
        </div>
        <div className="flex flex-row gap-2 text-2xl">
          <a href="">
            <FaSquareFacebook />
          </a>
          <a href="">
            <FaSquareInstagram />
          </a>

          <a href="">
            <FaSquareXTwitter />
          </a>
          <a href="">
            <FaSquareYoutube />
          </a>
          <a href="" rel="nofollow">
            <IoGlobeOutline />
          </a>
        </div>
      </div>
    </div>
  );
};

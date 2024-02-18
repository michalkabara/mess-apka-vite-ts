import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full py-3 px-5  text-white   border-b border-zinc-700 max-w-[1280px] text-sm">
      <a href="#">Liga IV</a>
      <a href="#">Liga V</a>
      <Link to="/">Okręgówka</Link>
      <a href="#">A klasa</a>
      <a href="#">B klasa</a>
    </div>
  );
};

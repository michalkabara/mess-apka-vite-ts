import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex items-center gap-8 w-full py-3 px-5 text-zinc-800 dark:text-zinc-100 max-w-[1200px] text-sm">
      <a href="#">Liga IV</a>
      <a href="#">Liga V</a>
      <Link to="/">Okręgówka</Link>
      <a href="#">A klasa</a>
      <a href="#">B klasa</a>
    </div>
  );
};

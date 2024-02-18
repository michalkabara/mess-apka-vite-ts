import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="flex items-center justify-between py-3 px-5  text-white w-full max-w-[1280px]">
      <Link to={""}>
        <span>logo</span>
      </Link>

      <input
        type="text"
        placeholder="search"
        className="border px-2 py-1 rounded-md border-l-neutral-400"
      />
      <button>Login</button>
    </div>
  );
};

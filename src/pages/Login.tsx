import { TbLogin2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export const Login = () => {
  const inputStyle =
    "border px-2 py-1 rounded-md border-zinc-400 bg-zinc-200 placeholder:text-zinc-800 dark:border-zinc-500 dark:bg-zinc-700 dark:placeholder:text-zinc-200 placeholder:text-sm";

  return (
    <div className="flex items-center flex-col">
      <p>Logignowanie</p>

      <form action="" className="flex flex-col gap-3 mt-5">
        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="text-sm">
            Wpisz login:
          </label>
          <input name="username" type="text" placeholder="Email lub login" className={inputStyle} />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="username" className="text-sm">
            Wpisz Hasło:
          </label>
          <input name="username" type="password" placeholder="Hasło" className={inputStyle} />
        </div>
        <button className="text-sm flex flex-row gap-2 justify-center items-center bg-[#ed4535] py-2 px-3 rounded-md text-zinc-100">
          <p>Zaloguj</p>
          <TbLogin2 />
        </button>
      </form>

      <div className="mt-5 bg-zinc-800">
        <SignInButton />
      </div>

      <div className="flex flex-col gap-1 items-center mt-5">
        <p className="text-xs opacity-50">Nie masz konta?</p>
        <Link className="text-xs hover:underline" to="/register">
          Zarejestruj się
        </Link>
      </div>
    </div>
  );
};

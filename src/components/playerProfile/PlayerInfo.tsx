import defaultPlayer from "../../img/default_player.png";
import { Player } from "../../types";

export const PlayerInfo: React.FC<Player> = ({ photoUrl, name, roles, country = "Poland", age = "21", number }) => {
  return (
    <div className="flex flex-row text-sm gap-5">
      <img className="size-36" src={photoUrl || defaultPlayer} alt={name} />
      <div className="flex flex-col gap-1 text-xs font-extrabold">
        <p className="text-xl font-bold">
          {number} {name}
        </p>
        <p>
          <span className="">Kraj:</span> {country}
        </p>
        <p>
          <span className="">Wiek:</span> {age}
        </p>
        <p>
          <span className="">Klub:</span>
        </p>
        <p>
          <span className="">Pozycja:</span> {roles}
        </p>
      </div>
    </div>
  );
};

import { FC } from "react";
import defaultPlayer from "../../img/default_player.png";
import { Player } from "../../types";

export const PlayerInfo: FC<Player> = ({ photoUrl, name, roles, country, age, number }) => {
  return (
    <div className="flex flex-row text-sm gap-5">
      <img className="size-36" src={photoUrl || defaultPlayer} alt={name} />
      <div className="flex flex-col gap-1 text-xs">
        <p className="text-xl font-bold">
          {number} {name}
        </p>
        <p>
          <span className="font-extrabold">Kraj:</span> {country}
        </p>
        <p>
          <span className="font-extrabold">Wiek:</span> {age}
        </p>
        <p>
          <span className="font-extrabold">Klub:</span>
        </p>
        <p>
          <span className="font-extrabold">Pozycja:</span> {roles}
        </p>
      </div>
    </div>
  );
};

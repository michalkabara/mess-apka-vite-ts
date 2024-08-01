import { Link } from "react-router-dom";
import defaultPlayer from "../../img/default_player.png";
import { Player } from "../../types";

export const PlayerInfo: React.FC<Player> = ({
  photoUrl,
  name,
  roles,
  country = "Poland",
  age = "21",
  number,
  team,
}) => {
  return (
    <div className="flex flex-col text-sm gap-5 items-center py-4">
      <img className="size-32" src={photoUrl || defaultPlayer} alt={name} />
      <div className="flex flex-col gap-2 text-sm items-center">
        <p className="text-xl font-semibold">
          {number} {name}
        </p>

        <Link to={`/team/${team.id}`} className="flex flex-row gap-2 items-center">
          <img src={team.logoUrl} alt={team.name} className="bg-white p-[3px] rounded-md w-auto h-6" /> {team.name}
        </Link>
      </div>
    </div>
  );
};

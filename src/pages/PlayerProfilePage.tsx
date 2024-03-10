import defaultPlayer from "../img/default_player.png";

export const PlayerProfilePage: React.FC<{
  playerName: string;
  playerSurname: string;
  playerDoB: string;
  playerPos: string;
  playerTeam: string;
}> = ({ playerName, playerSurname, playerDoB, playerPos, playerTeam }) => {
  return (
    <div className="flex flex-row text-sm gap-5">
      <img className="w-32" src={defaultPlayer} alt={`${playerName} ${playerSurname}`} />
      <div className="flex flex-col gap-1">
        <p>Pozycja: {playerPos}</p>
        <p>
          Imię Naziwsko: {playerName} {playerSurname}
        </p>
        <p>Data urodzenia: {playerDoB}</p>
        <p>Drużyna: {playerTeam}</p>
      </div>
    </div>
  );
};

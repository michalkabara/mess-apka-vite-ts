import { Game } from "../../types/gameTypes";
import { GameLinkWithOutcome } from "../ui/GameLinkWithOutcome";

export const AwayGames: React.FC<{ awayGames: Game[]; homeTeamId?: string }> = ({ awayGames, homeTeamId }) => {
  return (
    <>
      {awayGames.map((game, index: number) => (
        <GameLinkWithOutcome game={game} index={index} winnerId={homeTeamId} key={game.id} />
      ))}
    </>
  );
};

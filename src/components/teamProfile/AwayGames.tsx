import { Game } from "../../types/gameTypes";
import { GameLinkWithOutcomeColor } from "../ui/GameLinkWithOutcomeColor";

export const AwayGames: React.FC<{ awayGames: Game[]; homeTeamId?: string }> = ({ awayGames, homeTeamId }) => {
  return (
    <>
      {awayGames.map((game, index: number) => (
        <GameLinkWithOutcomeColor game={game} index={index} winnerId={homeTeamId} key={game.id} />
      ))}
    </>
  );
};

import { Game } from "../../types/gameTypes";
import { GameLinkWithOutcomeColor } from "../ui/GameLinkWithOutcomeColor";

export const HomeGames: React.FC<{ homeGames: Game[]; homeTeamId?: string }> = ({ homeGames, homeTeamId }) => {
  return (
    <>
      {homeGames.map((game: Game, index: number) => (
        <GameLinkWithOutcomeColor game={game} index={index} winnerId={homeTeamId} key={game.id} />
      ))}
    </>
  );
};

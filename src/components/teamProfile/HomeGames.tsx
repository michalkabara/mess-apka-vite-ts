import { Game } from "../../types/gameTypes";
import { GameLinkWithOutcome } from "../ui/GameLinkWithOutcome";

export const HomeGames: React.FC<{ homeGames: Game[]; homeTeamId?: string }> = ({ homeGames, homeTeamId }) => {
  return (
    <>
      {homeGames.map((game: Game, index: number) => (
        <GameLinkWithOutcome game={game} index={index} winnerId={homeTeamId} key={game.id} />
      ))}
    </>
  );
};

import { Player } from ".";
import { Team } from "./teamTypes";

export enum GameEventType {
  Unknown,
  YellowCard,
  RedCard,
  SubOut,
  SubIn,
  Injury,
  Goal,
  OwnGoal,
  Penalty,
  SubInOut,
  SecondYellowCard,
}

export interface GameEvent {
  minute: number;
  additionalTime: number;
  isHostEvent: boolean;
  eventType: GameEventType;
  playerName: string;
  playerId: string;
  swapInfo?: {
    outPlayerName: string;
    outPlayerId: string;
    inPlayerName: string;
    inPlayerId: string;
  };
  displayTime: string;
}
export interface Game {
  id?: string;
  homeTeamId?: string;
  awayTeamId?: string;
  leagueId?: string;
  homeGoals?: number | null;
  awayGoals?: number | null;
  date: string;
  round?: number;
  events: GameEvent[];
  winnerId?: string;
  isFinished?: boolean;
  outcome?: number;
  awayTeam?: Team;
  homeTeam?: Team;
  homePlayers?: Player[];
  awayPlayers?: Player[];
  mainRefereeName: string;
  assistantRefereeName: string;
  secondAssistantRefereeName: string;
  observerName: string;
  trybunaTvWatchLink: string;
  stadiumName: string;
}

export type PartialGame = Partial<Game>;

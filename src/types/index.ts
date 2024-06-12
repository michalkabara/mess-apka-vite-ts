// export interface League {
//   id: string;
//   parentLeagueId: any;
//   name: string;
//   logoUrl: string;
//   season: string;
//   teams: any;
//   matchResults: any;
// }

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
}

export interface GameEvent {
  minute: number;
  additionalTime: number;
  isHostEvent: boolean;
  eventType: GameEventType;
  playerName: string;
  displayTime: string;
}
export interface Game {
  id?: string;
  homeTeamId?: string;
  awayTeamId?: string;
  leagueId?: string;
  homeGoals?: number;
  awayGoals?: number;
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
}

export type PartialGame = Partial<Game>;

export interface Player {
  id: string;
  name: string;
  photoUrl: string;
  number: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  roles: string;
  legPreference: string;
  lastName: string;
  firstName: string;
  isGoalKeeper: boolean;
  isCaptain: boolean;
}

export interface Team {
  id: string;
  name: string;
  logoUrl: string;
  colors: string;
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  websiteUrl: string;
  youtubeUrl: string;
  currentLeague: string;
  players: Player[];
}

export interface League {
  id: string;
  parentLeagueId: string | null;
  name: string;
  logoUrl: string | null;
  season: string;
  childLeagues: League[];
}

export interface LeagueTableEntry {
  teamId: string;
  teamName: string;
  logoUrl: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

export interface LegueHeaderType {
  leagueName: string;
  subLeagues?: string[];
  isActive?: boolean;
  toggleSection?: () => void;
  leagueId: string | undefined;
  isLinkEnabled?: boolean;
  hideArrow?: boolean;
}

export interface Player {
  id: string;
  name: string;
  photoUrl: string;
  number: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  roles: string;
  legPreference: string;
}

export interface PagedResponse<T> {
  data: T[];
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  totalCount: number;
}

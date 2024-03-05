export interface TeamPlayersType {
  name: string;
  surname: string;
  number: string;
  isGoalKeeper?: boolean;
  isCaptain?: boolean;
  age: string;
  mainLeg: string;
}

// export interface League {
//   id: string;
//   parentLeagueId: any;
//   name: string;
//   logoUrl: string;
//   season: string;
//   teams: any;
//   matchResults: any;
// }

export interface Game2 {
  id?: string;
  homeTeamId?: string;
  awayTeamId?: string;
  leagueId?: string;
  homeGoals: number | undefined;
  awayGoals: number | undefined;
  date: string;
  round?: number;
  winnerId?: string;
  isFinished?: boolean;
  outcome?: number;
  awayTeam: Team;
  homeTeam: Team;
}

export type Game = Partial<Game2>;

export interface Player {
  id: string;
  name: string;
  photoUrl: string;
  number: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  teamId: string;
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
  parentLeagueId: string;
  name: string;
  logoUrl: string;
  season: string;
  teams: Team[];
  matchResults: string;
}

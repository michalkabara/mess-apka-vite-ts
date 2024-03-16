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
  roles: number;
  legPreference: number;
}

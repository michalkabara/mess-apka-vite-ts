export interface League {
  id: string;
  parentLeagueId: string | null;
  name: string;
  logoUrl: string;
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

export interface LeagueStatPlayer {
  id: string;
  name: string;
  teamId: string;
  teamName: string;
  teamLogoUrl: string;
  value: number;
}

export interface LeagueStats {
  leagueId: string;
  homeWins: number;
  awayWins: number;
  draws: number;
  homeGoals: number;
  awayGoals: number;
  topScorers: LeagueStatPlayer[];
  topYellowCards: LeagueStatPlayer[];
  topRedCards: LeagueStatPlayer[];
}

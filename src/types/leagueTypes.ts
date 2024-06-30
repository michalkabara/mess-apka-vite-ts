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

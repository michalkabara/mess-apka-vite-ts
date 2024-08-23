import { Player } from ".";

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
  season: string;
  statistics: {
    wins: number;
    losses: number;
    draws: number;
    winsHome: number;
    lossesHome: number;
    winsAway: number;
    lossesAway: number;
    totalGoals: number;
    goalsHome: number;
    goalsAway: number;
    lostGoals: number;
    yellowCards: number;
    redCards: number;
  };
}

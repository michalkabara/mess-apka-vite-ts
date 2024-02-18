export type gameType = {
  HomeTeamId: number;
  Date: Date;
  HomeGoals: string;
  AwayGoals: string;
  MatchId: number;
  HomeTeamName: string;
  AwayTeamName: string;
  AwayTeamId: number;
  HomeTeamLogoUrl: string;
  AwayTeamLogoUrl: string;
  Period: number;
};

export type TeamType = {
  TeamId: number;
  TeamName: string;
  LogoUrl: string;
  Played: number;
  Won: number;
  Drawn: number;
  Lost: number;
  GoalsFor: number;
  GoalsAgainst: number;
  GoalDifference: number;
  Points: number;
};

import { MatchResult } from "./MatchResult";

export default interface MatchInterface {
  date: Date;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  winner: MatchResult;
  referee: string;
}

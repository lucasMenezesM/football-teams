import { Analyzer } from "../Summary";
import MatchInterface from "../MatchInterface";
import { MatchResult } from "../MatchResult";

export default class WinsAnalysis implements Analyzer {
  constructor(private team: string) {}

  public run(matches: MatchInterface[]): string {
    let wins = 0;

    matches.forEach((match) => {
      if (
        match.homeTeam.toLowerCase() === this.team.toLowerCase() &&
        match.winner === MatchResult.HomeWin
      ) {
        wins++;
      } else if (
        match.awayTeam.toLowerCase() === this.team.toLowerCase() &&
        match.winner === MatchResult.AwayWin
      ) {
        wins++;
      }
    });

    return `Team ${this.team} won ${wins} games`;
  }
}

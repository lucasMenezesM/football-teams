import { Analyzer } from "../Summary";
import MatchInterface from "../MatchInterface";
import { MatchResult } from "../MatchResult";

export default class AverageAnalysis implements Analyzer {
  constructor(private team: string) {}

  public run(matches: MatchInterface[]): string {
    let wins = 0;
    let gamesPlayed = 0;

    for (let match of matches) {
      matches.forEach((match) => {
        if (
          match.homeTeam.toLowerCase() === this.team.toLowerCase() &&
          match.winner === MatchResult.HomeWin
        ) {
          wins++;
          gamesPlayed++;
        } else if (
          match.awayTeam.toLowerCase() === this.team.toLowerCase() &&
          match.winner === MatchResult.AwayWin
        ) {
          wins++;
          gamesPlayed++;
        }
      });
    }

    const average = wins / gamesPlayed;
    return `The average number of victories for ${
      this.team
    } is ${average.toFixed(2)}`;
  }
}

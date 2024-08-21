import { dateStringConvert } from "./util/utils";
import { MatchResult } from "./MatchResult";
import MatchInterface from "./MatchInterface";
import { DataReader } from "./DataReaderInterface";

export default class MatchReader {
  private matches: MatchInterface[] = [];
  constructor(private reader: DataReader) {}

  public getMatches(): MatchInterface[] {
    return this.matches;
  }

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((match: string[]): MatchInterface => {
      return {
        date: dateStringConvert(match[0]),
        homeTeam: match[1],
        awayTeam: match[2],
        homeScore: Number(match[3]),
        awayScore: Number(match[4]),
        winner: match[5] as MatchResult,
        referee: match[6],
      };
    });
  }
}

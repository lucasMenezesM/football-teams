import CsvFileReader from "./CsvFileReader";
import MatchInterface from "./MatchInterface";
import { dateStringConvert } from "./util/utils";
import { MatchResult } from "./MatchResult";

export default class MatchReader extends CsvFileReader<MatchInterface> {
  constructor(protected filename: string) {
    super(filename);
  }

  protected mapRow(match: string[]): MatchInterface {
    const newMatch: MatchInterface = {
      date: dateStringConvert(match[0]),
      homeTeam: match[1],
      awayTeam: match[2],
      homeScore: Number(match[3]),
      awayScore: Number(match[4]),
      winner: match[5] as MatchResult,
      referee: match[6],
    };

    return newMatch;
  }
}

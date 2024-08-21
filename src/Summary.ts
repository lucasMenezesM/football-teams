import MatchInterface from "./MatchInterface";

export interface Analyzer {
  run(matches: MatchInterface[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export default class Summary {
  constructor(private analyzer: Analyzer, private outputTarget: OutputTarget) {}

  public buildAndPrintReport(matches: MatchInterface[]): void {
    const result = this.analyzer.run(matches);
    this.outputTarget.print(result);
  }
}

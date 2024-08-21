import { OutputTarget } from "../Summary";

export default class ConsoleReports implements OutputTarget {
  public print(report: string): void {
    console.log(report);
  }
}

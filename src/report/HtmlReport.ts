import fs from "fs";
import { OutputTarget } from "../Summary";

export default class HtmlReport implements OutputTarget {
  public print(report: string): void {
    const html = `
            <div>
                <h1>Report:</h1>
                <div>${report}</div>
            </div>
        `;

    fs.writeFileSync("report.html", html);
  }
}

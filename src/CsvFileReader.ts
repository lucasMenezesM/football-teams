import fs from "fs";
import { DataReader } from "./DataReaderInterface";

export default class CsvFileReader implements DataReader {
  data: string[][] = [];

  constructor(private filename: string) {}

  public getData(): string[][] {
    return this.data;
  }

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      });

    return;
  }
}

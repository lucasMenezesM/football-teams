import fs from "fs";

export default abstract class CsvFileReader<T> {
  private data: T[] = [];

  constructor(protected filename: string) {}

  protected abstract mapRow(match: string[]): T;

  public getData(): T[] {
    return this.data;
  }

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: "utf-8" })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }
}

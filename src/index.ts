import MatchReader from "./MatchReader";
import CsvFileReader from "./CsvFileReader";
import Summary from "./Summary";
import ConsoleReports from "./report/ConsoleReport";
import WinsAnalysis from "./analyzers/WinsAnalysis";
import HtmlReport from "./report/HtmlReport";

const csvFile = new CsvFileReader("football.csv");

const matchReader = new MatchReader(csvFile);
matchReader.load();

const matches = matchReader.getMatches();

const winsAnalyzer = new WinsAnalysis("Arsenal");
const consoleReport = new ConsoleReports();
const htmlReport = new HtmlReport();

const summary = new Summary(winsAnalyzer, consoleReport);

summary.buildAndPrintReport(matches);

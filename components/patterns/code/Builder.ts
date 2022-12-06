interface ReportBuilder {
	setTitle(): void;
	setHeader(): void;
	setFooter(): void;
	setContent(): void;
}

class PdfReportBuilder implements ReportBuilder {
	private name: string;
	private report: Report | undefined;

	constructor(name: string) {
		this.name = name;
		this.reset();
	}

	reset(): void {
		this.report = new Report("Generating PDF Report");
	}

	setTitle(): void {
		this.report?.parts.push("Show Title");
	}

	setHeader(): void {
		this.report?.parts.push("Show Header");
	}

	setFooter(): void {
		this.report?.parts.push("Show Footer");
	}

	setContent(): void {
		this.report?.parts.push("Show Content");
	}

	getReport(): Report | undefined {
		const result = this.report;
		this.reset();
		return result;
	}
}

class CsvReportBuilder implements ReportBuilder {
	private name: string;
	private report: Report | undefined;

	constructor(name: string) {
		this.name = name;
		this.reset();
	}

	reset(): void {
		this.report = new Report("Generating CSV Report");
	}

	setTitle(): void {
		this.report?.parts.push("Show Title");
	}

	setHeader(): void {
		this.report?.parts.push("Show Header");
	}

	setFooter(): void {
		this.report?.parts.push("Show Footer");
	}

	setContent(): void {
		this.report?.parts.push("Show Content");
	}

	getReport(): Report | undefined {
		const result = this.report;
		this.reset();
		return result;
	}
}

class Report {
	public parts: string[] = [];

	constructor(name: string) {
		this.parts.push(name);
	}

	public generateReport(): void {
		console.log(`Reports content: ${this.parts.join(", ")}\n`);
	}
}

class ReportsDirector {
	private builder: ReportBuilder;

	constructor(builder: ReportBuilder) {
		this.builder = builder;
	}

	public setBuilder(builder: ReportBuilder): void {
		this.builder = builder;
	}

	public buildPdf(): void {
		this.builder.setTitle();
		this.builder.setHeader();
		this.builder.setContent();
		this.builder.setFooter();
	}

	public buildCsv(): void {
		this.builder.setTitle();
		this.builder.setContent();
	}
}

const clientCall = () => {
	const builder = new PdfReportBuilder("PDF");

	console.log("Standard pre-defined way to generate the report");
	const director = new ReportsDirector(builder);
	director.buildPdf();
	builder.getReport()?.generateReport();

	const builder2 = new CsvReportBuilder("csv");
	director.setBuilder(builder2)
	director.buildCsv()
	builder2.getReport()?.generateReport();

	console.log("Custom Report excluding title and header to generate the report");
	builder.setContent();
	builder.setFooter();
	builder.getReport()?.generateReport();
}

// clientCall();

export const BuilderCode: string = `
// Builder Pattern
interface ReportBuilder {
	setTitle(): void;
	setHeader(): void;
	setFooter(): void;
	setContent(): void;
}

class PdfReportBuilder implements ReportBuilder {
	private name: string;
	private report: Report | undefined;

	constructor(name: string) {
		this.name = name;
		this.reset();
	}

	reset(): void {
		this.report = new Report();
	}

	setTitle(): void {
		this.report?.parts.push("Show Title");
	}

	setHeader(): void {
		this.report?.parts.push("Show Header");
	}

	setFooter(): void {
		this.report?.parts.push("Show Footer");
	}

	setContent(): void {
		this.report?.parts.push("Show Content");
	}

	getReport(): Report | undefined {
		const result = this.report;
		this.reset();
		return result;
	}
}

class CsvReportBuilder implements ReportBuilder {
	private name: string;
	private report: Report | undefined;

	constructor(name: string) {
		this.name = name;
		this.reset();
	}

	reset(): void {
		this.report = new Report();
	}

	setTitle(): void {
		this.report?.parts.push("Show Title");
	}

	setHeader(): void {
		this.report?.parts.push("Show Header");
	}

	setFooter(): void {
		this.report?.parts.push("Show Footer");
	}

	setContent(): void {
		this.report?.parts.push("Show Content");
	}

	getReport(): Report | undefined {
		const result = this.report;
		this.reset();
		return result;
	}
}

class Report {
	public parts: string[] = [];

	public list(): void {
		console.log("Reports content: " + this.parts.join(", "));
	}
}

class ReportsDirector {
	private builder: ReportBuilder;

	constructor(builder: ReportBuilder) {
		this.builder = builder;
	}

	public setBuilder(builder: ReportBuilder): void {
		this.builder = builder;
	}

	public buildPdf(): void {
		this.builder.setTitle();
		this.builder.setHeader();
		this.builder.setContent();
		this.builder.setFooter();
	}

	public buildCsv(): void {
		this.builder.setTitle();
		this.builder.setContent();
	}
}

const clientCall = () => {
	const builder = new PdfReportBuilder("PDF");

	console.log("Standard pre-defined way to generate the report");
	const director = new ReportsDirector(builder);
	director.buildPdf();
	builder.getReport()?.list();

	console.log("Custom Report excluding title and header to generate the report");
	builder.setContent();
	builder.setFooter();
	builder.getReport()?.list();
}
`;
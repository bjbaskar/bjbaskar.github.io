interface IDocument {
	[id: string]: string;
}

abstract class AbstractDocument {
	document: IDocument = {};
	abstract title(doc: IDocument): void;
	abstract content(doc: IDocument, text: string): void;
	author(doc: IDocument): void {
		doc["author"] = "Baskaran";
	}
	print(doc: IDocument): void {
		console.log("=-=-=-=-=-=-=-=-=-");
		Object.keys(doc).forEach((attribute: string) => {
			console.log("Attibute => " + attribute + "\t" + doc[attribute]);
		});
		console.log("=-=-=-=-=-=-=-=-=-");
	}
	createDoc(text: string): void {
		this.title(this.document);
		this.content(this.document, text);
		if (this.author) {
			this.author(this.document);
		}
		this.print(this.document);
	}
}

class TextDocument extends AbstractDocument {
	title(doc: IDocument,): void {
		doc["title"] = " New Text Document"
	}
	content(doc: IDocument, text: string): void {
		doc["content"] = text;
	}
	author(doc: IDocument) {
		doc["author"] = "Baskaran B";
	}
}

class HTMLDocument extends AbstractDocument {
	title(doc: IDocument): void {
		doc["title"] = " New HTML Page"
	}
	content(doc: IDocument, text: string): void {
		let html: string = "Title comes here \n";
		html += "\t\t\t\t\t<p>" + text + "</p>";
		doc["content"] = html;
	}

}

const clientCode = () => {
	const txt = new TextDocument();
	txt.createDoc("God is Love");
	const html = new HTMLDocument();
	html.createDoc("God is Love");
}

// clientCode();

export const TemplateCode: string = `
// Template
interface IDocument {
	[id: string]: string;
}

abstract class AbstractDocument {
	document: IDocument = {};
	abstract title(doc: IDocument): void;
	abstract content(doc: IDocument, text: string): void;
	author(doc: IDocument): void {
		doc["author"] = "Baskaran";
	}
	print(doc: IDocument): void {
		console.log("=-=-=-=-=-=-=-=-=-");
		Object.keys(doc).forEach((attribute: string) => {
			console.log("Attibute => " + attribute + "\t" + doc[attribute]);
		});
		console.log("=-=-=-=-=-=-=-=-=-");
	}
	createDoc(text: string): void {
		this.title(this.document);
		this.content(this.document, text);
		if (this.author) {
			this.author(this.document);
		}
		this.print(this.document);
	}
}

class TextDocument extends AbstractDocument {
	title(doc: IDocument,): void {
		doc["title"] = " New Text Document"
	}
	content(doc: IDocument, text: string): void {
		doc["content"] = text;
	}
	author(doc: IDocument) {
		doc["author"] = "Baskaran B";
	}
}

class HTMLDocument extends AbstractDocument {
	title(doc: IDocument): void {
		doc["title"] = " New HTML Page"
	}
	content(doc: IDocument, text: string): void {
		let html: string = "Title comes here \n";
		html += "\t\t\t\t\t<p>" + text + "</p>";
		doc["content"] = html;
	}

}

const clientCode = () => {
	const txt = new TextDocument();
	txt.createDoc("God is Love");
	const html = new HTMLDocument();
	html.createDoc("God is Love");
}
`;
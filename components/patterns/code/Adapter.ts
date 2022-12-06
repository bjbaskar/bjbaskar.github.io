
class Target {
	public convert(): string {
		return `This is the default conversion of xml to json`;
	}
}

class Adaptee {
	public getXMLData(): string {
		return `<employee>
					<name fname="Baskaran" age=45 />
				</employee>`;
	}
}

class Adapter extends Target {
	private adaptee: Adaptee;

	constructor(adaptee: Adaptee) {
		super();
		this.adaptee = adaptee;
	}

	public convert(): string {
		const legacyData = this.adaptee.getXMLData();

		if (legacyData) {
			// use logic to convert xml to json
			const result = {
				"employee": {
					name: {
						fname: "Baskaran",
						age: 45
					}
				}
			}
			return JSON.stringify(result, null, 2);
		}
		return ``;
	}
}

const clientCode = (target: Target) => {
	console.log(target.convert());
}

// console.log("with Target objects");
// const target = new Target();
// clientCode(target);

// console.log("=-=-=-=-=-=-=-=-=-=-=");
// const adaptee = new Adaptee();
// console.log("with Adaptee Class");
// console.log(adaptee.getXMLData());

// console.log("=-=-=-=-=-=-=-=-=-=-=");
// const adapter = new Adapter(adaptee);
// clientCode(adapter);

export const AdapterCode: string = `
// Adapter
class Target {
	public convert(): string {
		return "This is the default conversion of xml to json";
	}
}

class Adaptee {
	public getXMLData(): string {
		return "<employee>
	<name fname="Baskaran" age = 45 />
		</employee>";
	}
}

class Adapter extends Target {
	private adaptee: Adaptee;

	constructor(adaptee: Adaptee) {
		super();
		this.adaptee = adaptee;
	}

	public convert(): string {
		const legacyData = this.adaptee.getXMLData();

		if (legacyData) {
			// use logic to convert xml to json
			const result = {
				"employee": {
					name: {
						fname: "Baskaran",
						age: 45
					}
				}
			}
			return JSON.stringify(result, null, 2);
		}
		return "";
	}
}

const clientCode = (target: Target) => {
	console.log(target.convert());
}

console.log("with Target objects");
const target = new Target();
clientCode(target);

console.log("=-=-=-=-=-=-=-=-=-=-=");
const adaptee = new Adaptee();
console.log("with Adaptee Class");
console.log(adaptee.getXMLData());

console.log("=-=-=-=-=-=-=-=-=-=-=");
const adapter = new Adapter(adaptee);
clientCode(adapter);
`;
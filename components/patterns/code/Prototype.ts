interface ICloneable {
	clone(): any;
}

class Prototype implements ICloneable {
	public identity: string = "";
	public list: Array<number> = [];

	constructor(identity: string) {
		this.identity = identity;

		for (let i: number = 0; i < 100; i++) {
			this.list.push(i);
		}
	}

	public clone(): Prototype {
		return Object.assign({}, this);
	}
}

const clientCode = () => {
	const p1 = new Prototype("Baskaran");
	const p1_clone = p1.clone();

	console.log(p1.identity === p1_clone.identity);
	console.log(p1.list[5] === p1_clone.list[5]);
}

// clientCode()

export const PrototypeCode: string = `
// Prototype
interface ICloneable {
	clone(): any;
}

class Prototype implements ICloneable {
	public identity: string = "";
	public list: Array<number> = [];

	constructor(identity: string) {
		this.identity = identity;

		for (let i: number = 0; i < 100; i++) {
			this.list.push(i);
		}
	}

	public clone(): Prototype {
		return Object.assign({}, this);
	}
}

const clientCode = () => {
	const p1 = new Prototype("Baskaran");
	let p1_clone = p1.clone();

	console.log(p1.identity === p1_clone.identity);
	console.log(p1.list[5] === p1_clone.list[5]);
}
`;
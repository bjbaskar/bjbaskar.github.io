
export class Singleton {
	private static instance: Singleton;

	private constructor() {
	}

	public static getInstance(): Singleton {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton();
		}
		return Singleton.instance;
	}
}

export const SingletonCode: string = `
// Singleton
export class Singleton {
	private static instance: Singleton;

	private constructor() {
	}

	public static getInstance(): Singleton {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton();
		}
		return Singleton.instance;
	}
}

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

if (singleton1 === singleton2) {
	console.log("Two singleton instances are equivalent");
} else {
	console.log("Two singleton instances are not equivalent");
}
`;
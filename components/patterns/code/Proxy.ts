interface Internet {
	connectTo(hostName: string): string;
}

class Connection implements Internet {
	public connectTo(hostName: string): string {
		return "Connecting to " + hostName;
	}
}

class ProxyConnection implements Internet {
	private _internet: Internet;
	private _blockSites: Array<string> = [];

	constructor() {
		this._internet = new Connection();
		this.blockSites();
	}

	public connectTo(hostName: string): string {
		if (this._blockSites.includes(hostName)) {
			return "Access Denied, the given hostName was blocked"
		}
		this._internet.connectTo(hostName);
		return "Connected successfully";
	}

	private blockSites(): boolean {
		this._blockSites = new Array<string>();
		this._blockSites.push("123.com");
		this._blockSites.push("xxx.com");
		this._blockSites.push("xyz.com");
		return true;
	}
}

const clientCode = () => {
	const connect: Internet = new ProxyConnection();
	let res = connect.connectTo("bjbaskar.github.io");
	console.log("Resut => " + res)
	res = connect.connectTo("xxx.com");
	console.log("Resut => " + res)
}

// clientCode();

export const ProxyCode: string = `
// Proxy
interface Internet {
	connectTo(hostName: string): string;
}

class Connection implements Internet {
	public connectTo(hostName: string): string {
		return "Connecting to " + hostName;
	}
}

class ProxyConnection implements Internet {
	private _internet: Internet;
	private _blockSites: Array<string> = [];

	constructor() {
		this._internet = new Connection();
		this.blockSites();
	}

	public connectTo(hostName: string): string {
		if (this._blockSites.includes(hostName)) {
			return "Access Denied, the given hostName was blocked"
		}
		this._internet.connectTo(hostName);
		return "Connected successfully";
	}

	private blockSites(): boolean {
		this._blockSites = new Array<string>();
		this._blockSites.push("123.com");
		this._blockSites.push("xxx.com");
		this._blockSites.push("xyz.com");
		return true;
	}
}

const clientCode = () => {
	const connect: Internet = new ProxyConnection();
	let res = connect.connectTo("bjbaskar.github.io");
	console.log("Resut => " + res)
	res = connect.connectTo("xxx.com");
	console.log("Resut => " + res)
}
`;
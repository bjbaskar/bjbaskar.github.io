interface ICommand {
	execute(): void;
}

class DocumentReceiver {
	public open(): void {
		console.log("Doc Receiver - Open");
	}

	public read(): void {
		console.log("Doc Receiver - Read");
	}

	public save(): void {
		console.log("Doc Receiver - Save");
	}
}

class SaveCommand implements ICommand {
	private docReceiver: DocumentReceiver;

	constructor(docRec: DocumentReceiver) {
		this.docReceiver = docRec;
	}

	public execute(): void {
		console.log("Command - Save");
		this.docReceiver.save();
	}
}

class OpenCommand implements ICommand {
	private docReceiver: DocumentReceiver;

	constructor(docRec: DocumentReceiver) {
		this.docReceiver = docRec;
	}

	public execute(): void {
		console.log("Command - Open");
		this.docReceiver.open();
	}
}

class DocumentInvoker {
	private _commands: { [id: string]: ICommand };
	private _history: [number, string][];

	constructor() {
		this._commands = {};
		this._history = [];
	}

	registerCommand(commandName: string, command: ICommand): void {
		this._commands[commandName] = command;
	}

	showHistory(): void {
		this._history.forEach((row) => {
			console.log(`Row ${row[0]} => ${row[1]}`);
		})
	}

	execute(commandName: string): void {
		if (commandName in this._commands) {
			this._commands[commandName].execute();
			this._history.push([Date.now(), commandName]);
		} else {
			console.log(`Command [${commandName}] not recognised`)
		}
	}

	replayLast(numberOfCommands: number): void {
		const command = this._history.slice(
			this._history.length - numberOfCommands,
			this._history.length
		)
		command.forEach((cmd) => {
			this._commands[cmd[1]].execute();
		})
	}
}

const clientCode = () => {
	const rec = new DocumentReceiver();

	const open = new OpenCommand(rec);
	const save = new SaveCommand(rec);

	const invoker = new DocumentInvoker();
	invoker.registerCommand("OPEN", open);
	invoker.registerCommand("SAVE", save);

	invoker.execute("OPEN");
	invoker.execute("SAVE");
	invoker.execute("OPEN");
	invoker.execute("SAVE");
	invoker.execute("SAVE11");

	invoker.showHistory();
	invoker.replayLast(1);
}

// clientCode();

export const CommandCode: string = `
// Command
interface ICommand {
	execute(): void;
}

class DocumentReceiver {
	public open(): void {
		console.log("Doc Receiver - Open");
	}

	public read(): void {
		console.log("Doc Receiver - Read");
	}

	public save(): void {
		console.log("Doc Receiver - Save");
	}
}

class SaveCommand implements ICommand {
	private docReceiver: DocumentReceiver;

	constructor(docRec: DocumentReceiver) {
		this.docReceiver = docRec;
	}

	public execute(): void {
		console.log("Command - Save");
		this.docReceiver.save();
	}
}

class OpenCommand implements ICommand {
	private docReceiver: DocumentReceiver;

	constructor(docRec: DocumentReceiver) {
		this.docReceiver = docRec;
	}

	public execute(): void {
		console.log("Command - Open");
		this.docReceiver.open();
	}
}

class DocumentInvoker {
	private _commands: { [id: string]: ICommand };
	private _history: [number, string][];

	constructor() {
		this._commands = {};
		this._history = [];
	}

	registerCommand(commandName: string, command: ICommand): void {
		this._commands[commandName] = command;
	}

	showHistory(): void {
		this._history.forEach((row) => {
			console.log("Row "+ row[0]  +" => " + row[1] );
		})
	}

	execute(commandName: string): void {
		if (commandName in this._commands) {
			this._commands[commandName].execute();
			this._history.push([Date.now(), commandName]);
		} else {
			console.log("Command name " + commandName + " not recognised)
		}
	}

	replayLast(numberOfCommands: number): void {
		const command = this._history.slice(
			this._history.length - numberOfCommands,
			this._history.length
		)
		command.forEach((cmd) => {
			this._commands[cmd[1]].execute();
		})
	}
}

const clientCode = () => {
	const rec = new DocumentReceiver();

	const open = new OpenCommand(rec);
	const save = new SaveCommand(rec);

	const invoker = new DocumentInvoker();
	invoker.registerCommand("OPEN", open);
	invoker.registerCommand("SAVE", save);

	invoker.execute("OPEN");
	invoker.execute("SAVE");
	invoker.execute("OPEN");
	invoker.execute("SAVE");
	invoker.execute("SAVE11");

	invoker.showHistory();
	invoker.replayLast(1);
}
`;
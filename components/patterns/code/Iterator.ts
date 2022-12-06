interface IIterator<T> {
	current(): T
	next(): T;
	hasNext(): boolean;
	first(): T;
	valid(): boolean;
}

class Iterator implements IIterator<string> {
	private _position: number = 0;
	private _reverse: boolean = false;
	private _collection: WordsCollection;

	constructor(collection: WordsCollection, reverse: boolean = false) {
		this._collection = collection;
		this._reverse = reverse;

		if (reverse) {
			this._position = collection.getCount() - 1;
		}
	}

	public current(): string {
		const res = this._collection.getItems();
		return res[this._position];
	}
	public next(): string {
		const item = this.current();
		this._position += this._reverse ? -1 : 1;
		return item;
	}
	public hasNext(): boolean {
		return this._position < this._collection.getCount();
	}
	public first(): string {
		this._position = 0;
		return this.next()
	}
	public valid(): boolean {
		if (this._reverse) {
			return this._position >= 0;
		}

		return this._position < this._collection.getCount();
	}

}

interface IAggregator {
	getIterator(): IIterator<string>;
}

class WordsCollection implements IAggregator {
	private _items: Array<string> = [];

	public getItems(): Array<string> {
		return this._items;
	}

	public getCount(): number {
		return this._items.length;
	}

	public addItem(item: string): void {
		this._items.push(item);
	}

	public getIterator(): IIterator<string> {
		return new Iterator(this);
	}

	public getReverseIterator(): IIterator<string> {
		return new Iterator(this, true);
	}
}

const clientCode = () => {
	const coll = new WordsCollection();
	coll.addItem("Apple");
	coll.addItem("ORange");
	coll.addItem("Mango");
	coll.addItem("Coconut");

	const iterator = coll.getReverseIterator();

	while (iterator.valid()) {
		console.log(iterator.next())
	}
}

// clientCode();

export const IteratorCode: string = `
// iterator
interface IIterator<T> {
	current(): T
	next(): T;
	hasNext(): boolean;
	first(): T;
	valid(): boolean;
}

class Iterator implements IIterator<string> {
	private _position: number = 0;
	private _reverse: boolean = false;
	private _collection: WordsCollection;

	constructor(collection: WordsCollection, reverse: boolean = false) {
		this._collection = collection;
		this._reverse = reverse;

		if (reverse) {
			this._position = collection.getCount() - 1;
		}
	}

	public current(): string {
		const res = this._collection.getItems();
		return res[this._position];
	}
	public next(): string {
		const item = this.current();
		this._position += this._reverse ? -1 : 1;
		return item;
	}
	public hasNext(): boolean {
		return this._position < this._collection.getCount();
	}
	public first(): string {
		this._position = 0;
		return this.next()
	}
	public valid(): boolean {
		if (this._reverse) {
			return this._position >= 0;
		}

		return this._position < this._collection.getCount();
	}

}

interface IAggregator {
	getIterator(): IIterator<string>;
}

class WordsCollection implements IAggregator {
	private _items: Array<string> = [];

	public getItems(): Array<string> {
		return this._items;
	}

	public getCount(): number {
		return this._items.length;
	}

	public addItem(item: string): void {
		this._items.push(item);
	}

	public getIterator(): IIterator<string> {
		return new Iterator(this);
	}

	public getReverseIterator(): IIterator<string> {
		return new Iterator(this, true);
	}
}

const clientCode = () => {
	const coll = new WordsCollection();
	coll.addItem("Apple");
	coll.addItem("ORange");
	coll.addItem("Mango");
	coll.addItem("Coconut");

	const iterator = coll.getReverseIterator();

	while (iterator.valid()) {
		console.log(iterator.next())
	}
}
`;
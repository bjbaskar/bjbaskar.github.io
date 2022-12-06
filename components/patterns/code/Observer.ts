interface IDataViewObserver {
	notify(data: number[]): void;
	render(data: number[]): void;
	delete(): void;
}

class ChartView implements IDataViewObserver {

	private _observable: IDataModelObservable;
	private _id: number;

	constructor(observable: IDataModelObservable) {
		this._observable = observable;
		this._id = this._observable.subscribe(this);
	}

	notify(data: number[]): void {
		console.log("ChartView notify..." + this._id);
		this.render(data);
	}
	render(data: number[]): void {
		console.log("ChartView rendering..." + JSON.stringify(data));
	}
	delete(): void {
		this._observable.unsubscribe(this._id);
	}
}

class TableView implements IDataViewObserver {
	private _observable: IDataModelObservable;
	private _id: number;

	constructor(observable: IDataModelObservable) {
		this._observable = observable;
		this._id = this._observable.subscribe(this);
	}

	notify(data: number[]): void {
		console.log("TableView notify..." + this._id);
		this.render(data);
	}
	render(data: number[]): void {
		console.log("TableView rendering..." + JSON.stringify(data));
	}
	delete(): void {
		this._observable.unsubscribe(this._id);
	}
}

interface IDataModelObservable {
	subscribe(observer: IDataViewObserver): number;
	unsubscribe(observerID: number): void;
	notify(data: number[]): void;
}

class DataModel implements IDataModelObservable {

	private _observers: { [id: number]: IDataViewObserver } = {};
	private _counter: number;

	constructor() {
		this._counter = 0;
	}

	subscribe(observer: IDataViewObserver): number {
		this._counter++;
		this._observers[this._counter] = observer;
		return this._counter;
	}
	unsubscribe(observerID: number): void {
		delete this._observers[observerID];
	}
	notify(data: number[]): void {
		console.log(this._observers);
		Object.keys(this._observers).forEach((obr) => {
			this._observers[parseInt(obr)].notify(data);
		});
	}
}

const clientCode = () => {
	const dataModel = new DataModel();
	const chartView = new ChartView(dataModel);
	const tableView = new TableView(dataModel);

	dataModel.notify([1, 2, 3]);
	tableView.delete();
	dataModel.notify([5, 6, 7, 8, 9, 10]);
}

// clientCode();

export const ObserverCode: string = `
// Observer
interface IDataViewObserver {
	notify(data: number[]): void;
	render(data: number[]): void;
	delete(): void;
}

class ChartView implements IDataViewObserver {

	private _observable: IDataModelObservable;
	private _id: number;

	constructor(observable: IDataModelObservable) {
		this._observable = observable;
		this._id = this._observable.subscribe(this);
	}

	notify(data: number[]): void {
		console.log("ChartView notify...")
		this.render(data);
	}
	render(data: number[]): void {
		console.log("ChartView rendering..." + JSON.stringify(data));
	}
	delete(): void {
		this._observable.unsubscribe(this._id);
	}
}

class TableView implements IDataViewObserver {
	private _observable: IDataModelObservable;
	private _id: number;

	constructor(observable: IDataModelObservable) {
		this._observable = observable;
		this._id = this._observable.subscribe(this);
	}

	notify(data: number[]): void {
		console.log("TableView notify...")
		this.render(data);
	}
	render(data: number[]): void {
		console.log("TableView rendering..." + JSON.stringify(data));
	}
	delete(): void {
		this._observable.unsubscribe(this._id);
	}
}

interface IDataModelObservable {
	subscribe(observer: IDataViewObserver): number;
	unsubscribe(observerID: number): void;
	notify(data: number[]): void;
}

class DataModel implements IDataModelObservable {

	private _observers: { [id: number]: IDataViewObserver } = {};
	private _counter: number;

	constructor() {
		this._counter = 0;
	}

	subscribe(observer: IDataViewObserver): number {
		this._counter++;
		this._observers[this._counter] = observer;
		return this._counter;
	}
	unsubscribe(observerID: number): void {
		delete this._observers[observerID];
	}
	notify(data: number[]): void {
		Object.keys(this._observers).forEach((obr) => {
			this._observers[parseInt(obr)].notify(data);
		});
	}
}

const clientCode = () => {
	const dataModel = new DataModel();
	const chartView = new ChartView(dataModel);
	const tableView = new TableView(dataModel);

	dataModel.notify([1, 2, 3]);
	tableView.delete();
	dataModel.notify([5, 6, 7, 8, 9, 10]);
}
`;
interface Workshop {
	work(): void;
}

class Assemble implements Workshop {
	public work(): void {
		console.log("Assemble work...")
	}
}

class Repair implements Workshop {
	public work(): void {
		console.log("Repair work...")
	}
}

abstract class Vehicle {
	public _aWorkShop: Workshop;
	public _rWorkShop: Workshop;

	constructor(assembleWorkshop: Workshop, repairWorkshop: Workshop) {
		this._aWorkShop = assembleWorkshop;
		this._rWorkShop = repairWorkshop;
	}

	public abstract manufacture(): void;
}

class Car extends Vehicle {
	constructor(aWrkShop: Workshop, rWrkShop: Workshop) {
		super(aWrkShop, rWrkShop);
	}

	public manufacture(): void {
		console.log("Car work...")
		this._aWorkShop.work();
		this._rWorkShop.work();
	}
}

class Bike extends Vehicle {
	constructor(aWrkShop: Workshop, rWrkShop: Workshop) {
		super(aWrkShop, rWrkShop);
	}

	public manufacture(): void {
		console.log("Bike work...")
		this._aWorkShop.work();
		this._rWorkShop.work();
	}
}

const clientCode = () => {
	const assemble = new Assemble();
	const repair = new Repair();

	const car: Vehicle = new Car(assemble, repair);
	const bike: Vehicle = new Bike(assemble, repair);

	car.manufacture();
	bike.manufacture();
}
// clientCode();

export const BridgeCode: string = `
// Bridge PAttern
interface Workshop {
	work(): void;
}

class Assemble implements Workshop {
	public work(): void {
		console.log("Assemble work...")
	}
}

class Repair implements Workshop {
	public work(): void {
		console.log("Repair work...")
	}
}

abstract class Vehicle {
	public _aWorkShop: Workshop;
	public _rWorkShop: Workshop;

	constructor(assembleWorkshop: Workshop, repairWorkshop: Workshop) {
		this._aWorkShop = assembleWorkshop;
		this._rWorkShop = repairWorkshop;
	}

	public abstract manufacture(): void;
}

class Car extends Vehicle {
	constructor(aWrkShop: Workshop, rWrkShop: Workshop) {
		super(aWrkShop, rWrkShop);
	}

	public manufacture(): void {
		console.log("Car work...")
		this._aWorkShop.work();
		this._rWorkShop.work();
	}
}

class Bike extends Vehicle {
	constructor(aWrkShop: Workshop, rWrkShop: Workshop) {
		super(aWrkShop, rWrkShop);
	}
	public manufacture(): void {
		console.log("Bike work...")
		this._aWorkShop.work();
		this._rWorkShop.work();
	}
}

const clientCode = () => {
	const assemble = new Assemble();
	const repair = new Repair();

	const car: Vehicle = new Car(assemble, repair);
	const bike: Vehicle = new Bike(assemble, repair);

	car.manufacture();
	bike.manufacture();
}
`;
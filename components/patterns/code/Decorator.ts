interface ICar {
	getDesc(): string;
	getPrice(): number;
}

class MaruthiCar implements ICar {
	private description: string = "";
	private price: number = 0;

	constructor(desc: string, basicPrice: number) {
		this.description = desc;
		this.price = basicPrice;
	}

	public getDesc(): string {
		return `Maruthi => ${this.description}`;
	}

	public getPrice(): number {
		return this.price;
	}
}

class HondaCity implements ICar {
	private description: string = "";
	private price: number = 0;

	constructor(desc: string, basicPrice: number) {
		this.description = desc;
		this.price = basicPrice;
	}

	public getDesc(): string {
		return `Honda => ${this.description}`;
	}

	public getPrice(): number {
		return this.price;
	}
}

abstract class CarDecorator implements ICar {
	description: string = "";
	price: number = 0;
	private _car: ICar;

	constructor(car: ICar) {
		this._car = car;
	}

	public getDesc(): string {
		return this._car?.getDesc();
	}

	public getPrice(): number {
		return this._car?.getPrice();
	}
}

class ColorDecorator extends CarDecorator {
	constructor(car: ICar) {
		super(car);
	}

	public getDesc(): string {
		const desc: string = " Color Decorator";
		return super.getDesc() + desc;
	}

	public getPrice(): number {
		const price: number = 1000;
		return super.getPrice() + price;
	}
}

class AudioDecorator extends CarDecorator {
	constructor(car: ICar) {
		super(car);
	}

	public getDesc(): string {
		const desc: string = " Audio Decorator";
		return super.getDesc() + desc;
	}

	public getPrice(): number {
		const price: number = 2000;
		return super.getPrice() + price;
	}
}

// const clientCode = (car: ICar) => {
// 	console.log(`Result ${car.getDesc()} = ${car.getPrice()}`)
// }

// const mCar = new MaruthiCar("Maruthi Car", 200000);
// clientCode(mCar);

// const mColorDec = new ColorDecorator(mCar);
// const mAudioDec = new AudioDecorator(mColorDec);
// clientCode(mAudioDec);

export const DecoratorCode: string = `
// Decorator
interface ICar {
	getDesc(): string;
	getPrice(): number;
}

class MaruthiCar implements ICar {
	private description: string = "";
	private price: number = 0;

	constructor(desc: string, basicPrice: number) {
		this.description = desc;
		this.price = basicPrice;
	}

	public getDesc(): string {
		return "Maruthi => " + this.description;
	}

	public getPrice(): number {
		return this.price;
	}
}

class HondaCity implements ICar {
	private description: string = "";
	private price: number = 0;

	constructor(desc: string, basicPrice: number) {
		this.description = desc;
		this.price = basicPrice;
	}

	public getDesc(): string {
		return "Honda => " + this.description ;
	}

	public getPrice(): number {
		return this.price;
	}
}

abstract class CarDecorator implements ICar {
	description: string = "";
	price: number = 0;
	private _car: ICar;

	constructor(car: ICar) {
		this._car = car;
	}

	public getDesc(): string {
		return this._car?.getDesc();
	}

	public getPrice(): number {
		return this._car?.getPrice();
	}
}

class ColorDecorator extends CarDecorator {
	constructor(car: ICar) {
		super(car);
	}

	public getDesc(): string {
		const desc: string = " Color Decorator";
		return super.getDesc() + desc;
	}

	public getPrice(): number {
		const price: number = 1000;
		return super.getPrice() + price;
	}
}

class AudioDecorator extends CarDecorator {
	constructor(car: ICar) {
		super(car);
	}

	public getDesc(): string {
		const desc: string = " Audio Decorator";
		return super.getDesc() + desc;
	}

	public getPrice(): number {
		const price: number = 2000;
		return super.getPrice() + price;
	}
}

const clientCode = (car: ICar) => {
	console.log("Result " + car.getDesc() + " = "  + car.getPrice()  )
}

const mCar = new MaruthiCar("Maruthi Car", 200000);
clientCode(mCar);

const mColorDec = new ColorDecorator(mCar);
const mAudioDec = new AudioDecorator(mColorDec);
clientCode(mAudioDec);
`;
interface CreditCard {
	getCardType(): string;
	getCreditLimit(): number;
	getAnnualCharges(): number;
}

class VisaCard implements CreditCard {
	public getCardType(): string {
		return ("Visa Card");
	}
	public getCreditLimit(): number {
		return 20000;
	}
	public getAnnualCharges(): number {
		return 500;
	}
}

class PlatinumCard implements CreditCard {
	public getCardType(): string {
		return ("Platinum Card");
	}
	public getCreditLimit(): number {
		return 25000;
	}
	public getAnnualCharges(): number {
		return 600;
	}
}

abstract class CardCreator {
	public abstract cardFactory(): CreditCard;

	public doOperation(): string {
		const product = this.cardFactory();

		const res = {
			"Abstract Card Creator": {
				CardType: product.getCardType(),
				CreditLimit: product.getCreditLimit(),
				AnnualCharges: product.getAnnualCharges()
			}
		};

		return JSON.stringify(res, null, 2);
	}
}

class ConcreteCreator extends CardCreator {
	private key: string = "";

	constructor(str: string) {
		super();
		this.key = str;
	}

	public cardFactory(): CreditCard {
		if (this.key === "VISACARD") {
			return new VisaCard();
		} else if (this.key === "PLATINUM") {
			return new PlatinumCard();
		}
		return new VisaCard();
	}
}

const clientCode = (creator: CardCreator) => {
	console.log(`Client: I'm not aware of creator's class`)
	console.log(creator.doOperation());
}

// clientCode(new ConcreteCreator("VISACARD"));
// clientCode(new ConcreteCreator("PLATINUM"));

// interface Product {
// 	buy(): string;
// 	sell(): string;
// }

// class ConcreteProduct1 implements Product {
// 	public buy(): string {
// 		return `Return result of buy products-1`;
// 	}
// 	public sell(): string {
// 		return `Return result of sell products-1`;
// 	}
// }

// class ConcreteProduct2 implements Product {
// 	public buy(): string {
// 		return `Return result of buy products-2`;
// 	}
// 	public sell(): string {
// 		return `Return result of sell products-2`;
// 	}
// }

// abstract class Creator {
// 	public abstract factoryMethod(): Product;

// 	public someOperation(): string {
// 		const product = this.factoryMethod();

// 		return `Creator: Abstract Creator to buy product ${product.buy()} and sell ${product.sell()}`;
// 	}
// }

// class ConcreteCreator1 extends Creator {
// 	public factoryMethod(): Product {
// 		return new ConcreteProduct1();
// 	}
// }

// class ConcreteCreator2 extends Creator {
// 	public factoryMethod(): Product {
// 		return new ConcreteProduct2();
// 	}
// }

// export const clientCode1 = (creator: Creator) => {
// 	console.log(`Client: I'm not aware of creator's class`)
// 	console.log(creator.someOperation());
// }

// clientCode1(new ConcreteCreator1());
// clientCode1(new ConcreteCreator2());



export const FactoryMethodCode: string = `
// Factory Method
interface CreditCard {
	getCardType(): string;
	getCreditLimit(): number;
	getAnnualCharges(): number;
}

class VisaCard implements CreditCard {
	public getCardType(): string {
		return ("Visa Card");
	}
	public getCreditLimit(): number {
		return 20000;
	}
	public getAnnualCharges(): number {
		return 500;
	}
}

class PlatinumCard implements CreditCard {
	public getCardType(): string {
		return ("Platinum Card");
	}
	public getCreditLimit(): number {
		return 25000;
	}
	public getAnnualCharges(): number {
		return 600;
	}
}

abstract class CardCreator {
	public abstract cardFactory(): CreditCard;

	public doOperation(): string {
		const product = this.cardFactory();

		const res = {
			"Abstract Card Creator": {
				CardType: product.getCardType(),
				CreditLimit: product.getCreditLimit(),
				AnnualCharges: product.getAnnualCharges()
			}
		};

		return JSON.stringify(res, null, 2);
					 
	}
}

class ConcreteCreator extends CardCreator {
	private key: string = "VISACARD";

	constructor(str: string) {
		super();
		this.key = str;
	}

	public cardFactory(): CreditCard {
		if (this.key === "VISACARD") {
			return new VisaCard();
		} else if (this.key === "PLATINUM") {
			return new PlatinumCard();
		}
		return new VisaCard();
	}
}

const clientCode = (creator: CardCreator) => {
	console.log("Client: I'm not aware of creator's class");
	console.log(creator.doOperation());
}

clientCode(new ConcreteCreator("VISACARD"));
clientCode(new ConcreteCreator("PLATINUM"));
`;
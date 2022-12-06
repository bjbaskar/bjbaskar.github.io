interface ICustomer {
	validate(): boolean;
}

class Customer implements ICustomer {
	private name: string = "";
	constructor(name: string) {
		this.name = name;
	}

	public validate(): boolean {
		if (this.name.length > 2) {
			return true;
		}
		return false;
	}

	public getSavingAmount(): number {
		return 500000;
	}

	public getName(): string {
		return this.name;
	}
}

class Bank implements ICustomer {
	private _customer: Customer

	constructor(cust: Customer) {
		this._customer = cust;
	}

	public validate(): boolean {
		return this.hasGoodSaving();
	}

	private hasGoodSaving(): boolean {
		if (this._customer.getSavingAmount() >= 100000) {
			return true;
		}
		return false;
	}
}

class BankLoan implements ICustomer {
	private _customer: Customer;

	constructor(cust: Customer) {
		this._customer = cust;
	}

	public validate(): boolean {
		return this.hasExistingLoan();
	}

	private hasExistingLoan(): boolean {
		if (this._customer.getSavingAmount() >= 10000) {
			return true;
		}
		return false;
	}
}

class MortgageFacade {
	private customer: Customer;
	private bank: Bank;
	private bankLoan: BankLoan;

	constructor(customer: Customer) {
		this.customer = customer;
		this.bank = new Bank(customer);
		this.bankLoan = new BankLoan(customer);
	}

	public isEligible(): boolean {
		if (!this.customer.validate()) {
			return false;
		}
		if (!this.bank.validate()) {
			return false;
		}
		if (!this.bankLoan.validate()) {
			return false;
		}
		return true;
	}

	public getName(): string {
		return this.customer.getName();
	}
}

const clientCode = () => {
	const cust = new Customer("Baskaran");
	const facade = new MortgageFacade(cust);
	console.log("Facade isEligible => " + facade.getName() + " = " + facade.isEligible());
}

// clientCode();

export const FacadeCode: string = `
// Facade
interface ICustomer {
	validate(): boolean;
}

class Customer implements ICustomer {
	private name: string = "";
	constructor(name: string) {
		this.name = name;
	}

	public validate(): boolean {
		if (this.name.length > 2) {
			return true;
		}
		return false;
	}

	public getSavingAmount(): number {
		return 500000;
	}

	public getName(): string {
		return this.name;
	}
}

class Bank implements ICustomer {
	private _customer: Customer

	constructor(cust: Customer) {
		this._customer = cust;
	}

	public validate(): boolean {
		return this.hasGoodSaving();
	}

	private hasGoodSaving(): boolean {
		if (this._customer.getSavingAmount() >= 100000) {
			return true;
		}
		return false;
	}
}

class BankLoan implements ICustomer {
	private _customer: Customer;

	constructor(cust: Customer) {
		this._customer = cust;
	}

	public validate(): boolean {
		return this.hasExistingLoan();
	}

	private hasExistingLoan(): boolean {
		if (this._customer.getSavingAmount() >= 10000) {
			return true;
		}
		return false;
	}
}

class MortgageFacade {
	private customer: Customer;
	private bank: Bank;
	private bankLoan: BankLoan;

	constructor(customer: Customer) {
		this.customer = customer;
		this.bank = new Bank(customer);
		this.bankLoan = new BankLoan(customer);
	}

	public isEligible(): boolean {
		if (!this.customer.validate()) {
			return false;
		}
		if (!this.bank.validate()) {
			return false;
		}
		if (!this.bankLoan.validate()) {
			return false;
		}
		return true;
	}

	public getName(): string {
		return this.customer.getName();
	}
}

const clientCode = () => {
	const cust = new Customer("Baskaran");
	const facade = new MortgageFacade(cust);
	console.log("Facade isEligible => " + facade.getName() + " = " + facade.isEligible());
}
`;
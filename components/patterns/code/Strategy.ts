class Invoice {
	private _total: number = 0;
	private _netPayable: NetPayable;

	constructor(customerType: NetPayable) {
		this._netPayable = customerType
	}

	public set NetPayableCustomer(v: NetPayable) {
		this._netPayable = v;
	}

	public get grossAmount(): number {
		return this._total;
	}

	public set grossAmount(v: number) {
		this._total = v;
	}

	public getNetAmount(): number {
		if (this._netPayable) {
			return this._netPayable.calculateTotal(this);
		} else {
			throw new Error("Net Payable Customer has not assigned");
		}
	}

}

abstract class NetPayable {
	abstract calculateTotal(inv: Invoice): number;
}

class NormalCustomer extends NetPayable {
	public calculateTotal(inv: Invoice): number {
		return inv.grossAmount + (0.44 * inv.grossAmount);
	}
}

class SilverCustomer extends NetPayable {
	public calculateTotal(inv: Invoice): number {
		return inv.grossAmount + (0.20 * inv.grossAmount);
	}
}

class GoldenCustomer extends NetPayable {
	public calculateTotal(inv: Invoice): number {
		return inv.grossAmount + (0.08 * inv.grossAmount);
	}
}

const clientCode = () => {
	const cust1 = new NormalCustomer();
	const inv = new Invoice(cust1);
	inv.grossAmount = 1000;
	console.log("Base Customer => " + inv.getNetAmount())

	inv.NetPayableCustomer = new SilverCustomer();
	console.log("Silver Customer => " + inv.getNetAmount());
	inv.NetPayableCustomer = new GoldenCustomer();
	console.log("Golden Customer => " + inv.getNetAmount());
}

// clientCode();

export const StrategyCode: string = `
// Strategy
class Invoice {
	private _total: number = 0;
	private _netPayable: NetPayable;

	constructor(customerType: NetPayable) {
		this._netPayable = customerType
	}

	public set NetPayableCustomer(v: NetPayable) {
		this._netPayable = v;
	}

	public get grossAmount(): number {
		return this._total;
	}

	public set grossAmount(v: number) {
		this._total = v;
	}

	public getNetAmount(): number {
		if (this._netPayable) {
			return this._netPayable.calculateTotal(this);
		} else {
			throw new Error("Net Payable Customer has not assigned");
		}
	}

}

abstract class NetPayable {
	abstract calculateTotal(inv: Invoice): number;
}

class NormalCustomer extends NetPayable {
	public calculateTotal(inv: Invoice): number {
		return inv.grossAmount + (0.44 * inv.grossAmount);
	}
}

class SilverCustomer extends NetPayable {
	public calculateTotal(inv: Invoice): number {
		return inv.grossAmount + (0.20 * inv.grossAmount);
	}
}

class GoldenCustomer extends NetPayable {
	public calculateTotal(inv: Invoice): number {
		return inv.grossAmount + (0.08 * inv.grossAmount);
	}
}

const clientCode = () => {
	const cust1 = new NormalCustomer();
	const inv = new Invoice(cust1);
	inv.grossAmount = 1000;
	console.log("Base Customer => " + inv.getNetAmount())

	inv.NetPayableCustomer = new SilverCustomer();
	console.log("Silver Customer => " + inv.getNetAmount());
	inv.NetPayableCustomer = new GoldenCustomer();
	console.log("Golden Customer => " + inv.getNetAmount());
}
`;
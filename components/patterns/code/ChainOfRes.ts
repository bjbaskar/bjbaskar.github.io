interface Employee {
	name: string;
	leaves: number;
	status: string;
}

interface IHandler {
	setNextApprover(handler: IHandler): IHandler;
	handle(employee: Employee): Employee | null;
}

abstract class ApproverHandler implements IHandler {
	private _nextHandler: IHandler | null = null;

	setNextApprover(appHandler: IHandler): IHandler {
		this._nextHandler = appHandler
		return appHandler;
	}

	public handle(employee: Employee): Employee | null {
		if (this._nextHandler) {
			this._nextHandler.handle(employee);
		}
		return employee;
	}
}

class EmployeeLeaveReq extends ApproverHandler {
	constructor() {
		super();
	}
	public handle(employee: Employee): Employee | null {
		if (employee.leaves <= 5) {
			employee.status = "Leave request has been sent to Team Lead";
		}
		return super.handle(employee);
	}
}

class ManagerLeaveReq extends ApproverHandler {
	constructor() {
		super();
	}
	public handle(employee: Employee): Employee | null {
		if (employee.leaves > 5 && employee.leaves < 10) {
			employee.status = "Leave request has been sent to HR manager";
		}
		return super.handle(employee);
	}
}

class HRLeaveReq extends ApproverHandler {
	constructor() {
		super();
	}
	public handle(employee: Employee): Employee | null {
		if (employee.leaves >= 10) {
			employee.status = "Leave request has been sent to Finance Department for deduction";
		}
		return super.handle(employee);
	}
}

const clientCode = () => {
	const empReq: ApproverHandler = new EmployeeLeaveReq();
	const mgrReq: ApproverHandler = new ManagerLeaveReq();
	const hrReq: ApproverHandler = new HRLeaveReq();

	empReq.setNextApprover(mgrReq).setNextApprover(hrReq);

	let employee: Employee = {} as Employee;
	employee.name = "Baskaran";
	employee.leaves = 4;
	employee.status = "Apply leave";

	const res: Employee | null = empReq.handle(employee);

	console.log("Result =>" + JSON.stringify(res));
	return res;
}

// clientCode();

export const CORCode: string = `
// Chain Of Responsibilty
interface Employee {
	name: string;
	leaves: number;
	status: string;
}

interface IHandler {
	setNextApprover(handler: IHandler): IHandler;
	handle(employee: Employee): Employee | null;
}

abstract class ApproverHandler implements IHandler {
	private _nextHandler: IHandler | null = null;

	setNextApprover(appHandler: IHandler): IHandler {
		this._nextHandler = appHandler
		return appHandler;
	}

	public handle(employee: Employee): Employee | null {
		if (this._nextHandler) {
			this._nextHandler.handle(employee);
		}
		return employee;
	}
}

class EmployeeLeaveReq extends ApproverHandler {
	constructor() {
		super();
	}
	public handle(employee: Employee): Employee | null {
		if (employee.leaves <= 5) {
			employee.status = "Leave request has been sent to Team Lead";
		}
		return super.handle(employee);
	}
}

class ManagerLeaveReq extends ApproverHandler {
	constructor() {
		super();
	}
	public handle(employee: Employee): Employee | null {
		if (employee.leaves > 5 && employee.leaves < 10) {
			employee.status = "Leave request has been sent to HR manager";
		}
		return super.handle(employee);
	}
}

class HRLeaveReq extends ApproverHandler {
	constructor() {
		super();
	}
	public handle(employee: Employee): Employee | null {
		if (employee.leaves >= 10) {
			employee.status = "Leave request has been sent to Finance Department for deduction";
		}
		return super.handle(employee);
	}
}

const clientCode = () => {
	const empReq: ApproverHandler = new EmployeeLeaveReq();
	const mgrReq: ApproverHandler = new ManagerLeaveReq();
	const hrReq: ApproverHandler = new HRLeaveReq();

	empReq.setNextApprover(mgrReq).setNextApprover(hrReq);

	let employee: Employee = {} as Employee;
	employee.name = "Baskaran";
	employee.leaves = 4;
	employee.status = "Apply leave";

	const res: Employee | null = empReq.handle(employee);

	console.log("Result =>" + JSON.stringify(res));
	return res;
}
`;
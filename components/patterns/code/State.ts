abstract class EmployeeAppraisal {
	depositPoints(points: number, context: AppraisalContext) {
		context.statePoints = context.statePoints + points;
		this.calculatePoints(context);
	}
	deductPoints(points: number, context: AppraisalContext) {
		context.statePoints = context.statePoints - points;
		this.calculatePoints(context);
	}
	calculatePoints(context: AppraisalContext) {
		if (context.statePoints <= 20) {
			context.setEmployeeAppraisal = new BelowExpectation();
		} else if (context.statePoints > 20 && context.statePoints <= 60) {
			context.setEmployeeAppraisal = new MeetsExpectation();
		} else if (context.statePoints > 60) {
			context.setEmployeeAppraisal = new Outstanding();
		}
	}
	abstract getAppraisalState(): string;
}

class Outstanding extends EmployeeAppraisal {
	public getAppraisalState(): string {
		return "Outstanding";
	}
}

class MeetsExpectation extends EmployeeAppraisal {
	public getAppraisalState(): string {
		return "Meets Expectation";
	}
}

class BelowExpectation extends EmployeeAppraisal {
	public getAppraisalState(): string {
		return "Below Expectation";
	}
}

class AppraisalContext {
	private _apprState: EmployeeAppraisal;
	private _appraisalPoints: number;

	constructor() {
		this._apprState = new BelowExpectation();
		this._appraisalPoints = 10;
	}

	public depositPoints(points: number) {
		this._apprState.depositPoints(points, this);
	}

	public deductPoints(points: number) {
		this._apprState.deductPoints(points, this);
	}

	public get statePoints(): number {
		return this._appraisalPoints;
	}

	public set statePoints(p: number) {
		this._appraisalPoints = p;
	}

	public get setEmployeeAppraisal() {
		return this._apprState;
	}

	public set setEmployeeAppraisal(obj: EmployeeAppraisal) {
		this._apprState = obj;
	}
}

const clientCode = () => {
	const emp = new AppraisalContext();
	emp.depositPoints(15);
	console.log(`${emp.statePoints} => ${emp.setEmployeeAppraisal.getAppraisalState()}`)

	emp.deductPoints(35);
	console.log(`${emp.statePoints} => ${emp.setEmployeeAppraisal.getAppraisalState()}`)
}

// clientCode()

export const StateCode: string = `
// State
abstract class EmployeeAppraisal {
	depositPoints(points: number, context: AppraisalContext) {
		context.statePoints = context.statePoints + points;
		this.calculatePoints(context);
	}
	deductPoints(points: number, context: AppraisalContext) {
		context.statePoints = context.statePoints - points;
		this.calculatePoints(context);
	}
	calculatePoints(context: AppraisalContext) {
		if (context.statePoints <= 20) {
			context.setEmployeeAppraisal = new BelowExpectation();
		} else if (context.statePoints > 20 && context.statePoints <= 60) {
			context.setEmployeeAppraisal = new MeetsExpectation();
		} else if (context.statePoints > 60) {
			context.setEmployeeAppraisal = new Outstanding();
		}
	}
	abstract getAppraisalState(): string;
}

class Outstanding extends EmployeeAppraisal {
	public getAppraisalState(): string {
		return "Outstanding";
	}
}

class MeetsExpectation extends EmployeeAppraisal {
	public getAppraisalState(): string {
		return "Meets Expectation";
	}
}

class BelowExpectation extends EmployeeAppraisal {
	public getAppraisalState(): string {
		return "Below Expectation";
	}
}

class AppraisalContext {
	private _apprState: EmployeeAppraisal;
	private _appraisalPoints: number;

	constructor() {
		this._apprState = new BelowExpectation();
		this._appraisalPoints = 10;
	}

	public depositPoints(points: number) {
		this._apprState.depositPoints(points, this);
	}

	public deductPoints(points: number) {
		this._apprState.deductPoints(points, this);
	}

	public get statePoints(): number {
		return this._appraisalPoints;
	}

	public set statePoints(p: number) {
		this._appraisalPoints = p;
	}

	public get setEmployeeAppraisal() {
		return this._apprState;
	}

	public set setEmployeeAppraisal(obj: EmployeeAppraisal) {
		this._apprState = obj;
	}
}

const clientCode = () => {
	const emp = new AppraisalContext();
	emp.depositPoints(15);
	console.log(emp.statePoints + " => " + emp.setEmployeeAppraisal.getAppraisalState())
	emp.deductPoints(35);
	console.log(emp.statePoints + " => " + emp.setEmployeeAppraisal.getAppraisalState())
}
`;
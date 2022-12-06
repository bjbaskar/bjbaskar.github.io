abstract class EmployeeComponent {
	abstract getName(): string;
	abstract getRole(): string;
	abstract getSalary(): number;

	private parent: EmployeeComponent | null | undefined = undefined;

	public setParent(parent: EmployeeComponent | null | undefined) {
		this.parent = parent;
	}

	public getParent(): EmployeeComponent | undefined | null {
		return this.parent;
	}

	public isComposite(): boolean {
		return false;
	}
}

class Employee extends EmployeeComponent {
	private name: string;
	private role: string;
	private salary: number;

	constructor(name: string, role: string, salary: number) {
		super();
		this.name = name;
		this.role = role;
		this.salary = salary;
	}

	getName(): string {
		return this.name;
	}

	getRole(): string {
		return this.role;
	}

	getSalary(): number {
		return this.salary;
	}

	isComposite(): boolean {
		return false;
	}
}

class CompositeEmployee extends EmployeeComponent {
	private name: string;
	private role: string = "";
	private salary: number = 0;
	private children: Array<EmployeeComponent> = [];

	constructor(name: string, role: string, salary: number) {
		super();
		this.name = name;
		this.role = role;
		this.salary = salary;
		this.children = new Array<EmployeeComponent>();
	}

	public getName(): string {
		return this.name;
	}

	public getRole(): string {
		return this.role;
	}

	public getSalary(): number {
		let sal: number = 0;
		for (let child of this.children) {
			let cSalary: number = child.getSalary();
			let p_sal: number = cSalary;
			sal += p_sal;
		}
		if (this.isComposite()) {
			sal += this.salary;
		}
		return sal;
	}

	public isComposite(): boolean {
		return true;
	}

	public addEmployee(comp: EmployeeComponent) {
		this.children.push(comp);
		comp.setParent(this);
	}

	public removeEmployee(comp: EmployeeComponent) {
		const compIndex = this.children.indexOf(comp);
		this.children.splice(compIndex, 1);
		comp.setParent(null);
	}

	public showTeam(): Array<EmployeeComponent> {
		const res = this.children;
		return res;
	}
}

const clientCode = (comp: EmployeeComponent) => {
	console.log(`Result => ${comp.getName()} = ${comp.getRole()}  `);
}

// const Unit1_Lead = new CompositeEmployee("P1", "lead", 60);
// const dev1 = new Employee("p1-d1", "dev", 30);
// const dev2 = new Employee("p1-d2", "dev", 20);

// Unit1_Lead.addEmployee(dev1);
// Unit1_Lead.addEmployee(dev2);

// const Unit2_Lead = new CompositeEmployee("P11", "lead", 350);
// const dev21 = new Employee("p11-d1", "dev", 40);
// const dev22 = new Employee("p11-d2", "dev", 30);

// Unit2_Lead.addEmployee(dev21);
// Unit2_Lead.addEmployee(dev22);

// const manager = new CompositeEmployee("top", "manager", 80)
// manager.addEmployee(Unit1_Lead);
// manager.addEmployee(Unit2_Lead);

// clientCode(manager);
// console.log(`Unit1_Lead Total salary => ${Unit1_Lead.getSalary()}`);
// console.log(`Unit2_Lead Total salary => ${Unit2_Lead.getSalary()}`);
// console.log(`manager Total salary => ${manager.getSalary()}`);
// console.log(manager.showTeam());

export const CompositeCode: string = `
// Composite
abstract class EmployeeComponent {
	abstract getName(): string;
	abstract getRole(): string;
	abstract getSalary(): number;

	private parent: EmployeeComponent | null | undefined = undefined;

	public setParent(parent: EmployeeComponent | null | undefined) {
		this.parent = parent;
	}

	public getParent(): EmployeeComponent | undefined | null {
		return this.parent;
	}

	public isComposite(): boolean {
		return false;
	}
}

class Employee extends EmployeeComponent {
	private name: string;
	private role: string;
	private salary: number;

	constructor(name: string, role: string, salary: number) {
		super();
		this.name = name;
		this.role = role;
		this.salary = salary;
	}

	getName(): string {
		return this.name;
	}

	getRole(): string {
		return this.role;
	}

	getSalary(): number {
		return this.salary;
	}

	isComposite(): boolean {
		return false;
	}
}

class CompositeEmployee extends EmployeeComponent {
	private name: string;
	private role: string = "";
	private salary: number = 0;
	private children: Array<EmployeeComponent> = [];

	constructor(name: string, role: string, salary: number) {
		super();
		this.name = name;
		this.role = role;
		this.salary = salary;
		this.children = new Array<EmployeeComponent>();
	}

	public getName(): string {
		return this.name;
	}

	public getRole(): string {
		return this.role;
	}

	public getSalary(): number {
		let sal: number = 0;
		for (let child of this.children) {
			let cSalary: number = child.getSalary();
			let p_sal: number = cSalary;
			sal += p_sal;
		}
		if (this.isComposite()) {
			sal += this.salary;
		}
		return sal;
	}

	public isComposite(): boolean {
		return true;
	}

	public addEmployee(comp: EmployeeComponent) {
		this.children.push(comp);
		comp.setParent(this);
	}

	public removeEmployee(comp: EmployeeComponent) {
		const compIndex = this.children.indexOf(comp);
		this.children.splice(compIndex, 1);
		comp.setParent(null);
	}

	public showTeam(): Array<EmployeeComponent> {
		const res = this.children;
		return res;
	}
}

const clientCode = (comp: EmployeeComponent) => {
	console.log("Result => " +  comp.getName()  + " " +   comp.getRole());
}

const Unit1_Lead = new CompositeEmployee("P1", "lead", 60);
const dev1 = new Employee("p1-d1", "dev", 30);
const dev2 = new Employee("p1-d2", "dev", 20);

Unit1_Lead.addEmployee(dev1);
Unit1_Lead.addEmployee(dev2);

const Unit2_Lead = new CompositeEmployee("P11", "lead", 350);
const dev21 = new Employee("p11-d1", "dev", 40);
const dev22 = new Employee("p11-d2", "dev", 30);

Unit2_Lead.addEmployee(dev21);
Unit2_Lead.addEmployee(dev22);

const manager = new CompositeEmployee("top", "manager", 80)
manager.addEmployee(Unit1_Lead);
manager.addEmployee(Unit2_Lead);

clientCode(manager);
console.log("Unit1_Lead Total salary => " + Unit1_Lead.getSalary() );
console.log("Unit2_Lead Total salary => " + Unit2_Lead.getSalary()  );
console.log("manager Total salary => "  + manager.getSalary()  );
console.log(manager.showTeam());
`;
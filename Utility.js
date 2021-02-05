class EmployeePayroll {

    constructor(id, name, salary) {
        this._id = id;
        this._name = name;
        this._salary = salary;
    }
    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    set id(value) {
        this._id = value;
    }

    get id() {
        return this._id;
    }

    set salary(value) {
        this._salary = value;
    }
    get salary() {
        return this._salary;
    }
}

let emp = new EmployeePayroll(7, "Saurabh", 25000);
console.log("Employee name is :" + emp._name);
console.log("Employee id is :" + emp._id);
console.log("Employee salary is :" + emp._salary);

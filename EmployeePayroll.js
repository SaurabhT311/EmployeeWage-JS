class EmployeePayroll {

    constructor(id, name, salary, gender, startDate) {
        this._id = id;
        this._name = name;
        this._salary = salary;
        this._gender= gender;
        this._startDate=startDate;
    }
    get name() {
        return this._name;
    }

    set name(name) {
        try{
            var pattern = new RegExp("^[A-Z][a-zA-Z]{2,}");
            if(pattern.test(name))
            {
            this._name = name;
        } else{
            throw ("Name format is incorrect");
        }
     } catch(error){
         console.error(error);
    }
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

    set gender(gender)
    {
         this._gender=gender;
    }

    get gender()
    {
        return this._gender;
    }

    set startDate(date)
    {
        this._startDate=startDate;
    }

    get startDate()
    {
        return this._startDate;
    }
}

let emp = new EmployeePayroll(7,"Saurabh", 25000, 'Male', "20 Nov");
console.log("Employee name is :" + emp._name );
emp.name="October";
console.log(emp.name);
 console.log("Employee id is :" + emp._id);
 console.log("Employee salary is :" + emp._salary);
console.log("Employee gender is: "+ emp._gender);
console.log("Employee date of joining: "+ emp._startDate);

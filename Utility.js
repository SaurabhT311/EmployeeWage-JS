var IS_FULL_TIME = 1;
var IS_PART_TIME = 2;
var empHrs = 0;

class Utility {

    isPresentorAbsent() {
        console.log("Welcome to the Employee Wage");
        let empCheck = (Math.floor(Math.random() * 10) % 3);
        switch (empCheck) {
            case IS_FULL_TIME:
                empHrs = 8;
                console.log("Employee is Full Time");
                break;
            case IS_PART_TIME:
                empHrs = 4;
                console.log("Employee is Half Time");
                break;
            default:
                empHrs=0;
                console.log("Employee is Absent");
        }
          return empHrs;
    }
    calculateEmpWage() {
        const Wage_Per_Hour = 20;
        let workHours = Wage_Per_Hour * this.isPresentorAbsent();
        console.log("Employee Wage is: " + workHours);
    }
}
module.exports = new Utility();

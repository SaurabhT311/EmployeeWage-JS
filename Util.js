var IS_FULL_TIME = 1;
var IS_PART_TIME = 2;
var empHrs = 0;
var totalWorkingHours = 160;
var maxDays = 20;
var Wage_Per_Hour = 20;


class Utility {

    isPresentorAbsent() {
        let empCheck = (Math.floor(Math.random() * 10) % 3);
        switch (empCheck) {
            case IS_FULL_TIME:
                empHrs = 8;
                break;
            case IS_PART_TIME:
                empHrs = 4;
                break;
            default:
                empHrs = 0;
        }
        return empHrs;
    }

    calculateEmpWage() {
        let salary = Wage_Per_Hour * this.isPresentorAbsent();
        return salary; 
    }

    monthWageCalculate() {
        let workingHours = 0;
        let workingDays = 0;
        var totalSalary = 0;
        console.log("Welcome to the Employee Wage");

        while (workingHours <= totalWorkingHours && workingDays <= maxDays) {
            this.isPresentorAbsent();
            workingHours = workingHours + empHrs;
            workingDays++;
        }

        totalSalary = workingHours * Wage_Per_Hour;
        return totalSalary;

    }

    storingDailyWageInArrayHelper() {
        let workingHours = 0;
        let workingDays = 0;
        let empWage = 0;
        let totalEmpWage=0;
        let dailyWage = new Array();
         this.monthWageCalculate();
        while (workingHours <= totalWorkingHours && workingDays <= maxDays) {
            this.isPresentorAbsent();
            workingHours = workingHours + empHrs;
            workingDays++;
            empWage = workingDays * this.calculateEmpWage();
            dailyWage.push(empWage);
            totalEmpWage=dailyWage.reduce(function (currentValue,nextValue) {
                return currentValue + nextValue}, 0)
        }
             console.log("Total work is done: " + totalEmpWage);
    }

    storingDailyWageInMapHelper() {
        let workingHours = 0;
        let workingDays = 0;
        let dailyWage = new Map();
        while (workingHours <= totalWorkingHours && workingDays < maxDays) {
            this.isPresentorAbsent();
            workingHours = workingHours + empHrs;
            workingDays++;
            let empWage = this.calculateEmpWage();
             dailyWage.workingDays=[workingDays, empWage];
            console.log(dailyWage.workingDays);
            
        }
    }

}
module.exports=new Utility();

var IS_FULL_TIME = 1;
var IS_PART_TIME = 2;
var empHrs = 0;

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
                empHrs=0;
        }
          return empHrs;
    }

    calculateEmpWage() {
        const Wage_Per_Hour = 20;
        let workHours = Wage_Per_Hour * this.isPresentorAbsent();
        return workHours;
    }

    monthWageCalculate()
    {
        console.log("Welcome to the Employee Wage");
        let workday_in_month=20;
        let totalWork=0;
        for(let i=0;i <=workday_in_month; i++)
        {   
            totalWork=totalWork + this.calculateEmpWage();    
        }
        console.log("Total work is done: "+ totalWork);
    }
}

module.exports = new Utility();

var isPresent=1;


class Utility{

    isPresentorAbsent()
    {
        let result=(Math.floor(Math.random()*10)%2);
        if(result==isPresent)
        {
            console.log("Employee is present");
        }else{
            console.log("Employee is absent");
        }
    }
}
module.exports=new Utility();
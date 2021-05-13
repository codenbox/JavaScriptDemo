class Employee{

    constructor(eid, ename){
        this.id=eid;
        this.name=ename;
    }
}

Employee.prototype.sal=100000;
Employee.prototype.getEmployee=function(){
    console.log(this.id, this.name, this.sal);
}


var emp1=new Employee(110, "john");
//console.log(emp1.id, emp1.name, emp1.sal);
console.log("Employee from 1st object:")
emp1.getEmployee();


var emp2=new Employee(220, "Sariful");
//console.log(emp2.id, emp2.name, emp2.sal);
console.log("Employee from 2nd object:")
emp2.getEmployee();




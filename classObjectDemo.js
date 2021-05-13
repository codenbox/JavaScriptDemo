class Students
{
    constructor(id, sname, grade){
            this.id=id;
            this.sname=sname;
            this.grade=grade;
        }
    
    // setStudentDetails(id, sname, grade){
    //     this.id=id;
    //     this.sname=sname;
    //     this.grade=grade;
    // }

    getDetails(){
        console.log(this.id, this.sname, this.grade);

    }


}

let s=new Students(101, "john", "B");
//s.setStudentDetails(10, "jeckson", "A");
s.getDetails();

let s1=new Students(102, "jeckson", "A");
s1.getDetails();

let s2=new Students(103, "john heick", "C");
s2.getDetails();
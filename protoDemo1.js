function Student(){
    this.name="David";
    this.gender="Male";
}

Student.prototype.age=20;

var obj1=new Student();
//obj1.age=20;
console.log(obj1.age);

var obj2=new Student();
console.log(obj2.age);
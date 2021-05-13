class Person{
    constructor(){
        var name;
        var marks;
    }

    getName(){
       return this.name; 
    }

    setName(name1){
       this.name=name1; 
    }

    getMarks(){
        return this.marks;
    }

    setMarks(marks1){
        this.marks=marks1; 
     }
}

var per=new Person();
per.setName("Sariful");
per.setMarks(95);

// console.log(per.getName())
// console.log(per.getMarks())

//document.getElementById("personID").innerHTML=per.getName()+" "+per.getMarks();



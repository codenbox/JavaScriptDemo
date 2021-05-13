class Animal{
    eat(){
        console.log("Eating habit");
    }
}

class Dog extends Animal{
    eat(){
        console.log("Eating habit is gentle ");
    }
    
    sound(){
        console.log("woof woof!!");
    }
}

var obj=new Dog();
obj.eat();
obj.sound();



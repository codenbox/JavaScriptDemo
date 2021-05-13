class A
{
    display(){
        console.log("A is invoked");
    }
}

class B extends A
{
    display(){
        console.log("B is invoked");
    }

}

class C extends A
{
    display(){
        console.log("C is invoked");
    }
}

obj=new A();
obj.display();

obj=new B();
obj.display();

obj=new C();
obj.display();




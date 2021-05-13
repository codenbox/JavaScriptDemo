class Car{
    constructor(brand){
        this.carname=brand;
    }

    present(){
       console.log('I have a'+" " + this.carname); 
    }
}

class Model extends Car {
    constructor (brandName, modName){
       super(brandName);
       this.model=modName;
    }

    show(){
        this.present();
        console.log("it is a"+" "+this.model);
    }
}

var myCar=new Model("Honda", "CRV");
myCar.show();


class ReserveBank{
    getHomeLoan(){
    console.log(3.5) }
}

class HSBC extends ReserveBank{
     getHomeLoan(){
        console.log(5.5) } 
}

var obj=new HSBC();
obj.getHomeLoan() 

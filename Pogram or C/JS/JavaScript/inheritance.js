 class Parent{
    constructor (){
        this.fathername="JohirRaihan"
    }
 }
 class Child extends Parent {
    constructor(name){
        super();
        this.Name=name;
    }
    getFullName(){
        return this.Name+" "+this.fathername;
    }
 }
 const baby = new Child("sokhina");
 const baby2 = new Child("jorina");
 console.log(baby.getFullName());
 console.log(baby2.getFullName());
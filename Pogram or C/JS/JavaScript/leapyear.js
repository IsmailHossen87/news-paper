function isleapyear(year){
    if(year%100==0 || year%400 ==0){
        console.log("it is a leap year",year);
    }
    else 
        console.log("no leapyear",year);
    
}
const elelment =isleapyear(2020);
console.log(elelment)



const doubleIt= num => num*2;
const result0  = doubleIt(20);
console.log(result0)

const add = (x,y) => x+y;
const result =add(23,34);
console.log(result)

const give12 = () =>177;
const result1=give12();
console.log(result1)

const doMath = (x,y)=>{
    const add = x+y;
    const sub = x-y;
    const result =add * sub;
    return result;
}
const finalresult = doMath(20,10);
console.log(finalresult)
//array theke max ber koreee
const takapaisa =[345,235,866,123];
const maximum = Math.max(...takapaisa);
console.log(maximum)

//add array list
const age = [34,23,11,55];
const age1=[22,11,56];
const allage= [...age,444,...age1];
console.log(allage);
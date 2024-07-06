//নিচের সেন্টেন্সে yamin কতবার ব্যবহার করা হয়েছে এবং *** 1stly কত নাম্বার ইনডেক্স আছে;
const sentence = "In the heart of the city, there lived a man named Yamin,Yamin would ponder, with stars in his eyes.Yamin, the dreamer, with visions so grand,With Yamin, imagination could always run free."

const count = sentence.match(/yamin/gi);
let occurance = count ? count.length : 0; //count যদি সত্য হয় তাহলে Count.lenght নতুবা/(:) 0;
console.log(occurance);
//************Position**** */
let Position = sentence.search(/yamin/i);
Position = Position >= 0 ? Position : "not found!"
console.log(Position);


//include lenear search (["a","b","c","d","c"],"c")
//output 2 or "not found!"
function lenearSearch(arr,val){
    for (let i = 0; i< arr.length; i++){
        if(arr[i] === val){
            return i ;
        }
    }
    return "not found!"
}
console.log(lenearSearch(["a","b","c","d","c"],"c"));


//কোন Array  থেকে কিভাবে বড় string খুঁজে বের করবেন এবং এর index বের করবেন;
function longestString(names) {
    let word = "";
     
    for( let name of names ){
        if( name.length > word.length){
            word = name;
        }
    }
    return [word, names.indexOf(word)];

}
console.log(longestString(["ismail","yamin","Ismail Hossen Yamin","wadud"]))



//Array থেকে false ভ্যালু বের করতে হবে এবং তা বাদ দিতে হবে ;
//false is , false,undifine,null,"",
const mixedArray = [
    "lwk",
    "apple",
    true,
    "thanks all",
    undefined,
    40,
    false,
    "k",
    ""
];
const check = mixedArray.filter(Boolean);
console.log(check);


////Object  থেকে false ভ্যালু বের করতে হবে এবং তা বাদ দিতে হবে ;
const obj = {
    a: "lwk",
    b: "apple",
    c: true,
    d:"thanks all",
    e:undefined,
    f:40,
    g: false,
    h: "k",
    i:""
};
const trutyObject = function (obj){
    for ( let i in obj){
        if ( !obj[i]){
            delete obj [i];
        }
    }
    return obj;
}
console.log(trutyObject(obj));
    
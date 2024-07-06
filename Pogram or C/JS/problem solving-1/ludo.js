//লুডু খেলায় random সংখ্যাগুলো কিভাবে আসে
function ludo(Max,Min){
    return Math.floor(Math.random() * (Max-Min + 1) + Min); 
}
console.log(ludo(1,6));


//কিভাবে আমরা শ্রেণিকক্ষের সকল আলফাবেটলি সাজাতে পারে;

const students = ["rahim","karim","jodu","alamin","modu"];
students.sort()
console.log(students);


//কিভাবে আমরা শ্রেণিকক্ষের সকল রোল অনুযায়ী সাজাতে পারি
const stuRoll =[4,34,22,566,33,22,5,27,98,12];
console.log(stuRoll.sort(function(a,b){
    return a - b;
}))


//কোন বছর লিপিয়ার কিনা তা বের করার প্রোগ্রাম
function leapyear(year){
    if(year % 400 === 0 || year % 4 === 0 && year !== 0){
        console.log(`${year} is a leap year`);
    }else{
        console.log(`${year} is not a leap year`);
    }
}
leapyear(2028);


//কোন Sentence e  কতগুলো Vowel আছে কিনা তার নির্ণয় করার প্রোগ্রাম
const Vowel = ["a","e","i","o","u","A","E","I","O","U"];
function countVowel(sentence){
    let count = 0;
    let countLetter = Array.from(sentence);
    countLetter.forEach(function(value){
        if(Vowel.includes(value)){
            count ++;
        }
    })
    return count;
}
console.log(countVowel("Bangladesh is a small Country ."));


//কোন এরে থেকে Duplicate/ Unique নাম্বার বের করার প্রোগ্রাম
const digit = [ 34,4,43,34,2,2,55,43,1,2,4,56];
const duplicate = digit.filter(function(value,index,Array){
   return Array.indexOf(value) !==  index ;
}); 
console.log(duplicate);

const numbers =[3,6,23,8,5];

function square(element){
    return element*element;
}
const result= numbers.map(function(element){
    return element*element
})
console.log(result)
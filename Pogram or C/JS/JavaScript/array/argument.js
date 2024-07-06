function GetInput(firstname,lastname){
    fullName = " ";
    console.log(arguments);
    for(let i = 0;i<arguments.length ;i++){
        const namePart = arguments[i];
        fullName = fullName + " "+ namePart;
    }
    return fullName;
}
const nameI = GetInput("rahim","karim","jamil");
console.log(nameI);
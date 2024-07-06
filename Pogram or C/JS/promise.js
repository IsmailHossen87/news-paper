
const paymentSuccess = true;
const result = 80;

function enroll (){
    console.log("course enrollment is in process");

    const promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            if(paymentSuccess){
                resolve()
            }else{
                reject("pement failed");
            }
        },2000)
    });
    return promise;
}
function progress(){
    console.log("Course on process......");
    const promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            if(result >= 80){
                resolve();
            }else{
                reject("your marks is not enough");
            }
        },3000)
    })
    return promise;
}
function getcertificate(){
    console.log("preparing your certificate");
   const promise = new Promise(function(resolve){
    setTimeout(function(){
        resolve("Congretulation!!!! you get certificate");
    },1000)
   });
   return promise;
}
async function course(){
    try{
        await enroll();
        await progress();
        const message = await getcertificate();
        console.log(message);
    }catch(err){
        console.log(err)
    }    
}
course();

    
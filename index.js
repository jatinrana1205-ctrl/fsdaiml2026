// //console.log("hello world")
// //function greet(name,callback) {
//  //   console.log("Hello" + name);
//    // callback();
// //}
// //function sayBye() {
//   //  console.log("Goodbye");
// //}
// //greet("Jatin", sayBye);

// //function checkEvenOdd(callback) {
//   //  const num = Math.floor(Math.random() * 100) + 1;

//     //console.log("Random number = " + num);

//     //if (num % 2 === 0) {
//       //  callback(num + " is even", null);
//     //} else {
//       //  callback(num + " is odd", null);
//     //}
// //}

// //function result(message, error) {
//   //  console.log(message);
// //}

// //checkEvenOdd(result);


// //console.log("First");
// //setTimeout(() => {
//   //  console.log("Second");
// //}, 1000);
// // for(i=0;i<100;i++){
// //     console.log("Second");
// // }

// // console.log("Third");

// //callback hell
// // setTimeout(()=>{
// //     setTimeout(()=>{
// //         setTimeout(()=>{
// //             setTimeout(()=>{
// //                 setTimeout(()=>{
// //                     setTimeout(()=>{
// //                         setTimeout(()=>{
// //                             setTimeout(()=>{
// //                                 setTimeout(()=>{
                                    
// //                                 },1000)
// //                             },1000)
// //                         },1000)
// //                     },1000)
// //                 },1000)
// //             },1000)
// //         },1000)
// //     },1000)
// // },1000)


// //promises
   
// const myPromise=new Promise((resolve,reject)=>{
//    username="Jatin";
//    password="1234";
//    if (username == "Jatin" && password == "1234"){ 
//     resolve("Successful")
//    }
//     else{
//         reject("username or password is incorrect")
//     }})

//     // myPromise.then((msg)=>{
//     //     console.log(msg)
//     // }).catch((msg)=>{
//     //     console.log(msg)
//     // }).finally(()=>{
//     //     console.log("All the resources have been closed/memory released")
//     // })


//    async function handlelogin(){
//         try{
//              await myPromise
//         }catch(e){
//             console.log(e)
//         }
//         finally{
//             console.log("All the resources have been closed/memory released")
//         }
//     }
//     handlelogin();
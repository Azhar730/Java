var names = ["Saiful","Shariful","Ashraful","Beautiful","Golapful"]
//names.splice(2,1)
//names.splice(2)
// console.log(names);
// console.log(names[names.length-1]);//get for last element

// console.log(names.slice(1,3)) //output: ['Shariful','Ashraful']

// var empty=[]
// var num=12;
// var misty = 'Ros o Golla'
// console.log(Array.isArray(empty))
// console.log(Array.isArray(num))
// console.log(Array.isArray(misty))
// console.log(Array.isArray(names));




// names.push("Porimoni")
// console.log(names.indexOf("Rupoboti"))  output: -1

// console.log(names.indexOf("Porimoni"))

// if(names.includes("Porimoni")){
//     console.log("একসাথে পার্টি করতে যাব")
// }
// else{
//     console.log("বাড়িতে বসে মুড়ি খাব")
// }
//console.log(names.includes("Saiful"))


// names.pop();
// console.log(names);
// console.log(names.length);
// //Concat
// var country1 = ["Bangladesh","India","Pakistan","China"]
// var country2 = ["Swejerland","Netharland","Australia"]
// var country = country1.concat(country2);
// console.log(country);


//For replace
var num = [10,20,30,40,50,60,70,80,90]
// num.splice(2,1,100);
// num.splice(2,3,300,400,500);
num.splice(2,0,100,200)
console.log(num);
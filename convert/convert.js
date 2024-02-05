// function inchToFeet(inch){
//     const feet= inch/12
//     return feet;
// }
// const height=inchToFeet(80)
// console.log(height);


// function inchToFeet(inch){
//     const feet = parseInt(inch/12);
//     const inc = inch%12
//     const height = feet+"Feet"+inc+"Inch"
//     return height;

// }
// const inch=75
// const total=inchToFeet(inch);
// console.log(total);

// function mileToKilo(mile){
//     const kilo = mile*1.60934
//     return kilo
// }
// const mile = 5;
// const result = mileToKilo(mile);
// console.log(result);

function kiloToMile(kilo){
    const mile = kilo*0.621371
    return mile
}
const kilo = 10;
const result = kiloToMile(kilo)
console.log(result);
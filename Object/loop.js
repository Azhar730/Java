const mobile={
    brand: "samsung",
    color: "Dark Chocolate",
    camera: "25mp",
    battery: "6000mAh",
    quality:{
        isFingerprint:true,
        processor: "Octa Core"
    }
}
// mobile.brand = "iphone";
for (prop in mobile){
    // console.log(prop)
    // console.log(mobile[prop]);
}
const keys = Object.keys(mobile)
console.log(keys);
for(const key of keys){
    console.log(key,":" ,mobile[key])
}
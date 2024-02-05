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
for (const i in mobile){
    // console.log(i,typeof i)
    // console.log(i);
    console.log(mobile[i]);
}
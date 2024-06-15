function bmiCalc (weight, height){
    var bmiResult = weight / height * height;
    return Math.round(bmiResult);
    if (bmiResult < 18.5){
      console.log(bmiResult + " you are underweight");  
    } if (bimResult === 18.5 && bmiResult >= 24.9) {
         console.log(bmiResult + " so you have a normal weight");
        
    }
}
var bmiResult = bmiCalc (65,1.8);
// console.log(bmiResult + "you are underweight");
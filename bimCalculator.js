function bmiCalculator ( weight, height){
    var bmi = weight/ height * height;
    if (bmi < 18.5)
    return "your bmi is " + bmi + " so you are underweight";
}
var bmi = bmiCalculator(65, 1.8);
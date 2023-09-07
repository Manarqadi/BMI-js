function calculate_BMI(weight, height){
    var bmi = (weight*10)/(Math.pow(height,2)*.001);
    return bmi;}

function  interpret_BMI(bmi){
if (bmi<=18.5){
     alert("underweight")
        }
else if (bmi >18.5 && bmi <=25){
     alert("normal")
        }
else if (bmi>25 && bmi<=40){
     alert("overweight")
        }
else if(bmi>40){
     alert("obese")

        }
var weight = parseFloat(prompt("Enter your weight : "))
var height = parseFloat(prompt("Enter your height : "))

var bmi = calculate_BMI(weight, height)
alert("Your BMI is:", bmi)
var description=interpret_BMI(bmi)

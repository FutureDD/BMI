function calculatebmi(){
var age = document.getElementsByClassName("form-group1");
var height = document.getElementsByClassName("form-group2");
var weight = document.getElementsByClassName("form-group");
var male = document.getElementById("L");
var female = document.getElementById("P");

let bmi = weight / Math.pow(height / 100, 2);

  // Display result
  let result = "";
  if (bmi < 18.5) {
    result = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    result = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    result = "Overweight";
  } else if (bmi >= 30) {
    result = "Obese";
  }
  document.getElementById("hasil-nilai").innerHTML = `Your BMI is ${bmi.toFixed(2)
}. You are ${result}.`;
}
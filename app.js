const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#calculate-number");
const outputText = document.querySelector("#output-container");

checkNumber.addEventListener("click", checkBirthdayLucky);

function checkBirthdayLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateDate(dob);
  if (sum && luckyNumber) comapareValue(sum, luckyNumber.value);
  else {
    return (outputText.innerHTML = "Enter the DOB and lucky number first");
  }
}

function comapareValue(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    outputText.innerText = "Yay This is your lucky number 🙂";
  } else {
    outputText.innerText = "This is not your Lucky Number 🥹";
  }
}

function calculateDate(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum += Number(dob[i]);
  }
  return sum;
}

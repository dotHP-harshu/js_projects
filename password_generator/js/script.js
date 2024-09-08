let passPara = document.querySelector(".password");
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let number = document.getElementById("number");
let symbol = document.getElementById("symbol");
let passLength = document.getElementById("length");
let generateBtn = document.querySelector(".gen-btn");

//function that make a temp password that contain all checked values
const generatePassTemp = () => {
  let tempPass = "";
  let uppercaseValue = "ABCDEFGHIJKLMNOPQRTUVWXYZ";
  let lowercaseValue = "abcdefghijklmnopqrtuvwxyz";
  let numberValue = "123456789";
  let symbolValue = "!@#$%^&*";
  if (uppercase.checked == true) {
    tempPass += uppercaseValue;
  }
  if (lowercase.checked == true) {
    tempPass += lowercaseValue;
  }
  if (number.checked == true) {
    tempPass += numberValue;
  }
  if (symbol.checked == true) {
    tempPass += symbolValue;
  }
  return tempPass;
};

// function that generate the password of given length
const generatePass = () => {
  if (
    uppercase.checked == false &&
    lowercase.checked == false &&
    number.checked == false &&
    symbol.checked == false &&
    passLength.value == ""
  ) {
    alert("Something wrong \n At least one checkbox should be checked.");
  } else {
    let tempPass = generatePassTemp();
    let password = "";
    let length = parseInt(passLength.value);
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * tempPass.length);
      password += tempPass[index];
    }
    return password;
  }
};

//function that display the password
const showPass = () => {
  let password = generatePass();
  if (password == undefined) {
    passPara.innerText = '';
  } else {
    passPara.innerText = password;
  }
};

generateBtn.addEventListener("click", () => {
  showPass();
});


document.querySelector('#signup').addEventListener('click', validate);

function validate() {
  let a = document.forms["Form"]["username"].value;
if (a == "") {
  alert("Укажите ваше имя");
  return false;
}
let b = document.forms["Form"]["password"].value;
if (b == "") {
  alert("Укажите пароль");
  return false;
}
let с = document.forms["Form"]["phone"].value;
if (с == "") {
  alert("Укажите ваш телефон");
  return false;
}
let d = document.forms["Form"]["mail"].value;
if (d == "") {
  alert("Укажите ваш мэйл");
  return false;
}
else {
  alert (`Добро пожаловать ${a}`);
}
}
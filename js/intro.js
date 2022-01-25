var age = prompt("Введите Ваш возраст");

function isWorkingAgePerson(age) {
  if (age < 19) {
    return false;
  }
  if (age < 66) {
    return true;
  }
  if (age > 65) {
    return false;
  }
  console.log(age);
}
isWorkingAgePerson(age);

// let Value1 = prompt("Введите число");

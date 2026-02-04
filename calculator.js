function append(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  let exp = document.getElementById("display").value;
  document.getElementById("display").value = eval(exp);
}

function deleteDisplay() {
  let currentValue = document.getElementById("display").value;
  document.getElementById("display").value = currentValue.slice(0, -1);
}

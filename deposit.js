// common function
function getInputFieldValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValue = parseFloat(inputField.value);
  inputField.value = "";
  return inputValue;
}

function getInnerTextValue(textId) {
  const textArea = document.getElementById(textId);
  const textValue = parseFloat(textArea.innerText);
  return textValue;
}

function setInnerTextValue(innerTextId, amount) {
  const textElement = document.getElementById(innerTextId);
  textElement.innerText = amount;
}
document.getElementById("deposite_btn").addEventListener("click", function () {
  const newDeposite = getInputFieldValue("deposite_field");
  const previousDeposite = getInnerTextValue("deposite_text");
  const previousBalance = getInnerTextValue("balance_text");
  if (newDeposite > 0) {
    const depositeTotal = newDeposite + previousDeposite;
    const newBalanceTotal = newDeposite + previousBalance;
    setInnerTextValue("deposite_text", depositeTotal);
    setInnerTextValue("balance_text", newBalanceTotal);
  } else {
    alert("enter valid number");
  }
});

document.getElementById("withdraw_btn").addEventListener("click", function () {
  const newWithdraw = getInputFieldValue("withdraw_field");
  const previousWithdraw = getInnerTextValue("withdraw_text");
  const previousBalance = getInnerTextValue("balance_text");
  if (newWithdraw > 0 && previousBalance >= newWithdraw) {
    const withdrawTotal = newWithdraw + previousWithdraw;
    const newBalanceTotal = previousBalance - newWithdraw;
    setInnerTextValue("withdraw_text", withdrawTotal);
    setInnerTextValue("balance_text", newBalanceTotal);
  } else {
    alert("input valid number");
  }
});

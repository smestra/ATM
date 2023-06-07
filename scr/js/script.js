document.addEventListener("DOMContentLoaded", function () {
  let balanceProducts = document.getElementById("balance");
  let creditBalance = document.getElementById("credit");
  let inputDeposit = document.getElementById("btnDeposit");
  let inputWithdraw = document.getElementById("btnWithdraw");
  let inputAdvance = document.getElementById("btnAdvance");

  let currentBalance = Number(
    balanceProducts.innerText
      .replace(/[\$.,]/g, "")
      .replace(/\./g, "")
      .replace(",", ".")
  );
  let currentAdvance = Number(
    creditBalance.innerText.replace(/[\$.,]/g, "").replace(",", ".")
  );

  // funciones de los botones de avance, deposito y retiro

  const deposit = () => {
    let moneyInput = Number(document.getElementById("money").value);

    let newBalance = currentBalance + moneyInput;
    balanceProducts.innerText = "$" + newBalance.toFixed(2);
    currentBalance = newBalance;

    console.log(moneyInput);
    console.log(newBalance);
    let movementH2 = document.getElementById("movement");
    movementH2.innerText =
      "Realizaste un deposito de $" + moneyInput.toFixed(2);
  };

  const withdraw = () => {
    let moneyInput = Number(document.getElementById("money").value);
    if (moneyInput > currentBalance) {
      alert("Saldo insuficiente, no Puedes realizar esta transaccion");
      return;
    }
    //let currentBalance = Number(balanceProducts.innerText.replace(/[\$.,]/g, ""));
    let newBalance = currentBalance - moneyInput;
    balanceProducts.innerText = "$" + newBalance.toFixed(2);
    currentBalance = newBalance;
    let movementH2 = document.getElementById("movement");
    movementH2.innerText = "Realizaste un retiro de $" + moneyInput.toFixed(2);
  };

  const advance = () => {
    let moneyInput = Number(document.getElementById("money").value);
    if (moneyInput > 2000000) {
      alert("Has alcanzado el monto maximo por transacción");
      return;
    }

    let newAdvance = currentAdvance + moneyInput;
    creditBalance.innerText = "$" + " " + newAdvance.toFixed(2);
    currentAdvance = newAdvance;
    let movementH2 = document.getElementById("movement");
    movementH2.innerText = "Avanzaste $" + moneyInput.toFixed(2);
    console.log(newAdvance);
  };

  // fin de funciones de avance, deposito y retiro

  // eventos botones area transacciones

  inputDeposit.addEventListener("click", deposit);

  inputWithdraw.addEventListener("click", withdraw);

  inputAdvance.addEventListener("click", advance);
});

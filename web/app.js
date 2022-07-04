// me traigo el form:
const formElement = document.getElementById("saveTransaction");
// cuando te guarden en el form:
formElement.addEventListener("submit", (event) => {
  event.preventDefault(); // evito recargar el navegador!
  let transactionDescription = document.getElementById(
    "transactionDescription"
  ).value;
  let transactionPrice = document.getElementById("transactionPrice").value;
  let transaction = {
    transactionDescription: transactionDescription,
    transactionPrice: transactionPrice,
  };
  let transactionJson = JSON.stringify(transaction);
  //console.log(transactionJson);
  // enviar los datos al backend y guardarlos
  console.log(transactionJson);
  fetch("http://localhost:3000/transactions", {
    method: "Post",
    body: transactionJson,
  });
});

fetch("http://localhost:3000/transactions")
  .then((res) => res.json())
  .then(console.log);

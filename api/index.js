const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// simula una db:
let transactionArr = [];

//app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  express.json({
    type: "*/*",
  })
);

app.use(cors());

app.get("/transactions", (req, res) => {
  res.send(JSON.stringify(transactionArr));
});
//te hacen un post a http://localhost:3000/transactions
app.post("/transactions", (req, res) => {
  let transaction = req.body;
  transactionArr.push(transaction);
  //  console.log(req.body);
  res.send("soy un post que hicisteeeeeee");
  console.log(transactionArr);
});

app.listen(PORT, () => {
  console.log("estoy en http://localhost:" + PORT);
});
// The frontend submit the transtions...
// GET => micompu/transactiones => return the transactions
//POST => micompu/transactiones with a id {transactions} => save the transaction!

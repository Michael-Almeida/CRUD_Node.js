//configuração inicial
const express = require("express");
const app = express();
const mongoose = require("mongoose");



//forma de ler JSON /middlewares (recursos executados entre req,res)
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

//rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

//Rota inicial /endpoint
app.get("/", (req, res) => {

  res.json({ message: "Oi Express!" });
});

//entregar uma porta
const DB_USER = "michael";
const DB_PASSWORD = "Rv24QhdaMoKABkAH";

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.s1pv11e.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Conectamos ao MongoDB!");
    app.listen(3000);
  })
  .catch((err) => console.log(err));

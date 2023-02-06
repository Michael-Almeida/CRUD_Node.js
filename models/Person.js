const mongoose = require("mongoose");

// passar os campos que o module vai ter para exportar e poder importar no index

const Person = mongoose.model("Person", {
  name: String,
  salary: Number,
  approved: Boolean,
});

module.exports = Person
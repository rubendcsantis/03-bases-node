const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    default: 5,
    describe: 'Es la base de la tabla de multiplicar'
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: 'Muestra el listado en consola'
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: 'Maximo de la tabla a mostrar'
  })
  .check((argv, option) => {
    if (isNaN(argv.b)) {
      throw "La base dede ser un numero.";
    }
    return true;
  }).argv;

module.exports = argv;

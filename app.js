// importar la funcion crearArchivo
const { boolean } = require("yargs");
const { crearArchivo } = require("./ayudante/multiplicar");
const argv = require('./config/yargs');
// const base = 12;
console.clear();

console.log(process.argv);
console.log(argv);
const {base, listar, hasta} = argv;
// console.log(process.argv)
// const [ , ,agr3= "base=5"] = process.argv;
// const [,base] = agr3.split('=');
// console.log(base);
crearArchivo(base, listar, hasta)
  .then((nombreArchivo) => {
    console.log("Se ha escrito correctamente el archivo", nombreArchivo);
  })
  .catch((errores) => {
    console.log("Ha habido un error\n", errores);
  });

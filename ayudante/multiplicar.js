const fs = require("fs");
const colores = require('colors');
//valor por defecto 5
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";
    // concatenar los resultados
    for (let inicio = 1; inicio <= hasta; inicio++) {
      resultado = inicio * base;
      salida += `${inicio} * ${base} = ${resultado}\n`;
    }

    if (listar) {
      console.log("================".green);
      console.log("Tabla del: ".cyan, base,"hasta :", hasta);
      console.log("================".green);
      console.log(salida.rainbow);
    }

    fs.writeFileSync(`./salida/tabla ${base}.txt`, salida);
    return `tabla ${base}.txt`.trap;
  } catch (err) {
    throw err;
  }
};
module.exports = {
  crearArchivo,
};

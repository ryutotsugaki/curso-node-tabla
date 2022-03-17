const argv = require("yargs")
                    .option("b", {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'es la base para la tabla de multiplicar'
                    })
                    .option('l',{
                        alias:'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'si quieres listar la tabla o no'
                    })
                    .option('h',{
                        alias: 'hasta',
                        type: 'number',
                        demandOption: true,
                        describe: 'el limite de multiplar'
                    })
                    .check((argv, options)=>{
                        if( isNaN(argv.b) ){
                            throw 'La base debe ser un numero'
                        }else if(isNaN (argv.h)){
                            throw 'El limite, hasta, debe ser un numero'
                        } else
                        return true;
                    })
                    .argv;
module.exports = argv;
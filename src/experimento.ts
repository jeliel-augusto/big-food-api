import * as fs from 'fs'
// const fs = require('fs')
// callback hell  () => { () => { () => { } } }
// promises >:)
function tentarAcessarArquivo() {
    // fs.accessSync('./exemplo____.txt', fs.constants.O_RDONLY)

    // console.log('pos acessso')
    return new Promise<string>((resolve, reject) => {
        /** codigo assincrono, logica de negocio, acesso a banco, etc */
        fs.access('./exemplo_.txt', fs.constants.O_RDONLY as number, (err) => {
            if(err) reject('erro ao acessar arquivo')
            resolve('acesso ok')
        })
        /** */
    })
}
// tentarAcessarArquivo().then
async function tentarAcessarArquivoAsync() {
    try {
        const resultadoOK = await tentarAcessarArquivo()
        console.log(resultadoOK)
        /** codigo executado apenas apos OK da promise */
    }catch(e) {
        console.error('tratei a excecao motivo da promise: ' + e)
    }
}
tentarAcessarArquivoAsync()
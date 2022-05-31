const resultado = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Salvei no')
        // reject('BLA BLA BLA DEU ERRADO! ')
    }, 1000)
})

resultado.then(resultOK => {
    console.log('ok: ', resultOK)
}).catch(resultErro => {
    console.error('erro: ', resultErro)
})
console.log('OPERACAO SINCRONA')

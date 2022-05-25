import { Router } from 'express'

const rotasCardapio = Router()
let pratos = [
    'Picanha com arroz',
    'Frango Assado Completo',
    'Assado de Panela',
    'Lasanha'
]

rotasCardapio.get('/cardapio', (req, res) => {
    res.json(pratos)
})
rotasCardapio.post('/cardapio', (req, res) => {
    const body = req.body.prato
    console.log(body)
    pratos.push(body)
    res.status(201).json(true)
})
// DELETE /cardapio/:nome
// DELETE /cardapio/Lasanha
rotasCardapio.delete('/cardapio/:nome', (req, res) => {
    const nomePrato = req.params.nome
    pratos = pratos.filter((elemento) => elemento.toLowerCase() !== nomePrato.toLowerCase())
    res.json(pratos)
})
rotasCardapio.put('/cardapio/:nome', (req, res) => {
    const nomePrato = req.params.nome
    const indexDoPrato = pratos.indexOf(nomePrato)
    if(!req.body.prato) {
        return res.status(400).send('Prato é obrigatório')
    }
    if(indexDoPrato >= 0) {
        pratos[indexDoPrato] = req.body.prato
        res.status(200).send('Prato atualizado')
    } else {
        res.status(404).send('Prato nao encontrado')
    }
}) 
export default rotasCardapio
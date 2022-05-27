import { Router } from 'express'
import { cardapioController } from '../controllers/CardapioController'
const rotasCardapio = Router()

rotasCardapio.get('/cardapio', cardapioController.listarPratos)
rotasCardapio.post('/cardapio', cardapioController.adicionarPrato)
rotasCardapio.delete('/cardapio/:nome', cardapioController.removerPrato)
rotasCardapio.put('/cardapio/:nome', cardapioController.atualizarPrato) 

export default rotasCardapio
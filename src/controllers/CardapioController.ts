import { Request, Response } from "express"

let pratos = [
    'Picanha com arroz',
    'Frango Assado Completo',
    'Assado de Panela',
    'Lasanha'
]
class CardapioController {    
    listarPratos(req: Request, res: Response) {
        res.json(pratos)
    }
    adicionarPrato(req: Request, res: Response) {
        const body = req.body.prato
        pratos.push(body)
        res.status(201).json(true)
    }
    removerPrato(req: Request, res: Response) {
        const nomePrato = req.params.nome
        pratos = pratos.filter((elemento) => elemento.toLowerCase() !== nomePrato.toLowerCase())
        res.json(pratos)
    }
    atualizarPrato(req: Request, res: Response) {
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
    }
}
// const cardapioController = new CardapioController()
export const cardapioController = new CardapioController()
// export default cardapioController
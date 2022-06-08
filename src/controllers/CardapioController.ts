import { Request, Response } from "express"
import { AppDataSource } from "../data-source"
import { Prato } from "../entity/Prato"

class CardapioController {    
    async listarPratos(req: Request, res: Response) {
        const repository = AppDataSource.manager.getRepository(Prato)
        try {
            const pratos = await repository.find()
            res.json(pratos)
        } catch(e) {
            res.status(500).json({
                error: `Erro ao listar pratos`
            })
        } 
    }
    async adicionarPrato(req: Request, res: Response) {
        const body = req.body
        const repository = AppDataSource.manager.getRepository(Prato)
        try {
            const result = await repository.save(body)
            res.status(201).json(result)
        }catch(e: any) {
            res.status(400).json({ 
                error: `Erro ao salvar`,
                devError: `Erro SQL: ${e.code} - ${e.errno} - ${e.sqlMessage}` 
            })
        }
    }
    async removerPrato(req: Request, res: Response) {
        const nomePrato = req.params.nome
        const repository = AppDataSource.manager.getRepository(Prato)
        try {
            // const pratoExistente = await repository.findOne({
            //     where: {
            //         nome: Raw((alias) => `LOWER(${alias}) = '${nomePrato.toLowerCase()}'`)
            //     }
            // })
            // if(!pratoExistente) return res.status(404).json({
            //     error: 'prato nao encontrado'
            // })
            // const deleteResult = await repository.delete({
            //     nome: Raw((alias) => `LOWER(${alias}) = '${nomePrato.toLowerCase()}'`)
            // })
            const pratoExistente = await repository.findOne({
                where: {
                    nome: nomePrato
                }
            })
            if(!pratoExistente) return res.status(404).json({
                error: 'prato nao encontrado'
            })
            const deleteResult = await repository.delete({
                nome: nomePrato
            })
            res.json(deleteResult)
        }catch(e: any) {
            res.status(400).json({ 
                error: `Erro ao remover`,
                devError: `Erro SQL: ${e.code} - ${e.errno} - ${e.sqlMessage}` 
            })
        }
    }
    async atualizarPrato(req: Request, res: Response) {
        const nomePratoParaAtualizar = req.params.nome
        if(!req.body.nome) {
            return res.status(400).json({ error: 'Prato é obrigatório' })
        }
        const repository = AppDataSource.manager.getRepository(Prato)
        try {
            const pratoExistente = await repository.findOne({
                where: {
                    nome: nomePratoParaAtualizar
                }
            })
            if(!pratoExistente) return res.status(404).json({ error: 'Prato nao encontrado'})
            const result = await repository.update({
                nome: nomePratoParaAtualizar
            }, {
                nome: req.body.nome
            })
            res.json(result)
            // pratoExistente.nome = req.body.nome
            // const result = await repository.save(pratoExistente)
            // res.json(result)
        }catch(e: any) {
            res.status(400).json({ 
                error: `Erro ao atualizar`,
                devError: `Erro SQL: ${e.code} - ${e.errno} - ${e.sqlMessage}` 
            })
        }
        
    }
}
// const cardapioController = new CardapioController()
export const cardapioController = new CardapioController()
// export default cardapioController
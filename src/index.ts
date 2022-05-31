import express from 'express'
import { AppDataSource } from './data-source'
import rotasCardapio from './routes/cardapio'
const app = express()
app.use(express.json()) // Define que minhas rotas aceitem JSON no Body
app.use(rotasCardapio)
async function init() {
    try {
        const dataSource = await AppDataSource.initialize()
        app.listen(3000, () => {
            console.log('big-food-api running on 3000 and connected to database')
        })
    }catch(e) {
        throw new Error('erro ao conectar! verificar conexao com banco de dados!')
    }
}
init()
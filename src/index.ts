import express from 'express'
import rotasCardapio from './routes/cardapio'
const app = express()
app.use(express.json()) // Define que minhas rotas aceitem JSON no Body
app.use(rotasCardapio)
app.listen(3000, () => {
    console.log('big-food-api running on: 3000')
})
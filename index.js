import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import expressLayout from 'express-ejs-layouts'
import employeeRoute from './routes/employeeRoute.js'
import indexRoute from './routes/indexRoute.js'

const app = express()
const port = 3000

app.use(express.static('./public/stylesheet'))
app.use(express.static('./public/img'))
app.set('view engine', 'ejs')

app.use(cors())
app.use(express.json())
app.use(expressLayout)
app.use(employeeRoute)
app.use(indexRoute)

const main = async (req, res) => {
    await mongoose.connect('mongodb+srv://adiaz:nogova123@cluster0.gume9tn.mongodb.net/company?retryWrites=true&w=majority').finally(console.log('connected'))
}

main().catch(erorr => console.log(erorr))

app.listen(port, () => {
    console.log(`Server berjalan pada port ${port}`)
})

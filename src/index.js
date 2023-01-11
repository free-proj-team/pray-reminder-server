import express from 'express'
import { router as v1 } from './routes/v1/apigateway.js'

const app = express()

app.use(express.json())
app.get('/', (req, res, next) => { res.send("hello") })
app.use('/v1', v1)

app.listen(process.env.PORT, () => {
    console.log('server running on ' + process.env.PORT)
})
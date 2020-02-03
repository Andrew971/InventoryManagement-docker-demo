import cookieParser from 'cookie-parser'
import express from 'express'
import { Request, Response } from 'express'
import logger from 'morgan'
import path from 'path'
import BaseRouter from './routes'
import connect from './dbConnection'
const NODE_ENV = process.env.NODE_ENV

if(NODE_ENV !== 'test'){
  connect({
    host: 'mongodb://mongo:27017',
    database: 'Treez-demo',
    env: NODE_ENV || 'development'
  })
}
// Init express
const app = express()

// Add middleware/settings/routes to express.
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use('/api', BaseRouter)

app.get('/healthcheck', (req, res) => {
  res.status(500).send('I am happy and healthy\n')
});

app.get('/', (req: Request, res: Response) => {
    res.send('I am happy and healthy\n')
});

// Export express instance
export default app;

import express from 'express'
import path from 'path'
import cors from 'cors'
import { parse } from 'natural-script'

import logger from './utils/logger'

const app = express()

app.use(cors())

app.get('/hello', (req, res) => {
  res.send('Hello world')
})

app.get('/parse', async (req, res) => {
  const output = await parse(req.query.english, req.query.expected)
  res.send({ output })
})

console.log('path', path.join(__dirname, '../../frontend/public'))

app.use(express.static(path.join(__dirname, '../../frontend/public')))

const listener = app.listen(process.PORT || 3000, () => {
  logger.info('listening', { port: listener.address().port })
})

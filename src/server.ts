import 'reflect-metadata'

import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'

import cors from 'cors'
import AppError from './shared/errors/AppError'

const app = express()

app.use(cors())
app.use(express.json())

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    })
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
})

app.get('/', (request, response) => {
  return response.json({ message: 'it works' })
})

app.listen(1337)

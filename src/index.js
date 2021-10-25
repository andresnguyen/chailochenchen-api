const isProduction = process.env.NODE_ENV === 'production'
isProduction || require('dotenv').config()

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import createError from 'http-errors'

import route from './routes/index.route'
import AuthMiddleware from './middlewares/auth.middleware'
import connectDatabase from './configs/database.config'
import { failedResponse } from './constants/response.constant'
import { INTERNAL_SERVER, NOT_FOUND } from './constants/httpStatusCode.constant'

const app = express()

app.use(morgan('combined'))
app.use(helmet())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())

// connect db
connectDatabase()

app.use(AuthMiddleware.verifyLogin)

route(app)

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(NOT_FOUND, `Not Found Route!`))
})

// handle error
app.use((err, req, res, next) => {
    res.status(err.statusCode || INTERNAL_SERVER).json({
        ...failedResponse,
        error: err.message,
        code: err.statusCode || INTERNAL_SERVER
    })
})

app.listen(process.env.PORT || 3002, () =>
    console.log(`Server is running at port ${process.env.PORT || 3002}`)
)

import express from 'express'
const router = express.Router()

router.get('/', (req, res, next) => {
    res.send('Welcome To Faq Project')
})

export default router

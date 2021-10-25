import express from 'express'
import AuthController from '../controllers/auth.controller'
const router = express.Router()

router.post('/login', AuthController.logIn)
router.post('/change-pw', AuthController.changePassword)

export default router

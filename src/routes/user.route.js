import express from 'express'
import UserController from '../controllers/user.controller'

const router = express.Router()

router.get('/', UserController.getAll)
router.get('/:id', UserController.getOne)
router.post('/', UserController.postOne)
router.patch('/:id', UserController.updateOne)
router.delete('/:id', UserController.deleteOne)

export default router

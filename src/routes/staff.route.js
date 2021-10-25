import express from 'express'
import UserController from '../controllers/user.controller'
import AuthMiddleware from '../middlewares/auth.middleware'

const router = express.Router()

router.use(AuthMiddleware.verifyAdminPermission)

router.get('/', UserController.getAll)
router.get('/:id', UserController.getOne)
router.post('/', UserController.postOne)
router.patch('/:id', UserController.patchOne)
router.delete('/:id', UserController.deleteOne)

export default router

import express from 'express'
import FaqController from '../controllers/faq.controller'
import AuthMiddleware from '../middlewares/auth.middleware'

const router = express.Router()

router.get('/', FaqController.getAll)
router.get('/:id', FaqController.getOne)

router.use(AuthMiddleware.verifyEditorPermission)
router.post('/', FaqController.postOne)
router.patch('/:id', FaqController.patchOne)
router.delete('/:id', AuthMiddleware.verifyAdminPermission, FaqController.deleteOne)

export default router

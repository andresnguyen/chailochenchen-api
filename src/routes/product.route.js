import express from 'express'
import ProductController from '../controllers/product.controller'
import AuthMiddleware from '../middlewares/auth.middleware'
const router = express.Router()

router.get('/', ProductController.getAll)
router.get('/:id', ProductController.getOne)

router.use(AuthMiddleware.verifyEditorPermission)
router.post('/', ProductController.postOne)
router.patch('/:id', ProductController.patchOne)
router.delete('/:id', AuthMiddleware.verifyAdminPermission, ProductController.deleteOne)

export default router

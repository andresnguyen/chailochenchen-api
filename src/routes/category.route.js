import express from 'express'
import CategoryController from '../controllers/category.controller'
import AuthMiddleware from '../middlewares/auth.middleware'
const router = express.Router()

router.get('/', CategoryController.getAll)
router.get('/:id', CategoryController.getOne)

router.use(AuthMiddleware.verifyEditorPermission)
router.post('/', CategoryController.postOne)
router.patch('/:id', CategoryController.patchOne)
router.delete('/:id', AuthMiddleware.verifyAdminPermission, CategoryController.deleteOne)

export default router

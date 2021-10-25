import express from 'express'
import StaffController from '../controllers/staff.controller'
import AuthMiddleware from '../middlewares/auth.middleware'

const router = express.Router()

router.use(AuthMiddleware.verifyAdminPermission)

router.get('/', StaffController.getAll)
router.get('/:id', StaffController.getOne)
router.post('/', StaffController.postOne)
router.patch('/:id', StaffController.patchOne)
router.delete('/:id', StaffController.deleteOne)

export default router

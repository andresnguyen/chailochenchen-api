import express from 'express'
import ProductController from '../controllers/product.controller'
import fileUploader from '../configs/cloudinary.config'
const router = express.Router()

router.get('/', ProductController.getAll)
router.get('/:id', ProductController.getOne)
router.post('/', fileUploader.single('file'), ProductController.postOne)
router.patch('/:id', fileUploader.single('file'), ProductController.updateOne)
router.delete('/:id', ProductController.deleteOne)

export default router

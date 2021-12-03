import express from 'express'
import ProductController from '../controllers/product.controller'
import fileUploader from '../configs/cloudinary.config'
const router = express.Router()

router.get('/', ProductController.getAll)
router.get('/:id', ProductController.getOne)
router.post('/', ProductController.postOne)
router.post('/upload-image', fileUploader.single('file'), ProductController.uploadImage)
router.patch('/:id', ProductController.updateOne)
router.delete('/:id', ProductController.deleteOne)

export default router

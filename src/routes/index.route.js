import siteRoute from './site.route'
import userRoute from './user.route'
import authRoute from './auth.route'
import productRoute from './product.route'

function route(app) {
    app.use('/auth', authRoute)
    app.use('/users', userRoute)
    app.use('/products', productRoute)
    app.use('/', siteRoute)
}

export default route

import siteRoute from './site.route'
import userRoute from './staff.route'
import authRoute from './auth.route'
import productRoute from './product.route'

function route(app) {
    app.use('/auth', authRoute)
    app.use('/staffs', userRoute)
    app.use('/categories', productRoute)
    app.use('/', siteRoute)
}

export default route

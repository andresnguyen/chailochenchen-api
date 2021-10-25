import siteRoute from './site.route'
import staffRoute from './staff.route'
import faqRoute from './faq.route'
import authRoute from './auth.route'
import categoryRoute from './category.route'

function route(app) {
    app.use('/auth', authRoute)
    app.use('/faqs', faqRoute)
    app.use('/staffs', staffRoute)
    app.use('/categories', categoryRoute)
    app.use('/', siteRoute)
}

export default route

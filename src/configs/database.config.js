const mongoose = require('mongoose')

const connectDatabase = async () => {
    try {
        await mongoose.connect(
            process.env.DATABASE_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            }
        )
        console.log('Connect successfully!')
    } catch (error) {
        console.error('Connect failure!', error)
        process.exit()
    }
}

export default connectDatabase

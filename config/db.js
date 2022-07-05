const mongoose = require('mongoose')
const asyncHandler = require('express-async-handler')

const mongoDBconnect = asyncHandler( async () => {

    try {

        await mongoose.connect(process.env.MONGODB)
        console.log('MongoDB is ready'.bgBlue.black);

    } catch (error) {
        console.log(`${error}`.bgRed.black);
    }

})

module.exports = mongoDBconnect
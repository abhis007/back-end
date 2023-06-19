const mongoose = require ('mongoose')
const asyncHandler = require('express-async-handler')

const connectDb = async () =>{
    try {
        const con = await mongoose.connect(process.env.MONGO_URI)
        console.log(`connected to database ${con.connection.host}` )

    } catch (error) {
        
        console.log(`error :${error.message}`)
    }
}

module.exports = connectDb
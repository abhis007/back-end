const jwt = require('jsonwebtoken')
const { model } = require('mongoose')

const generateToken  =  (res,userId)=>{
    const token = jwt.sign({userId},process.env.SECRET,{
        expiresIn:'10d',
    })

    res.cookie('jwt',token,{
        httpOnly:true,
        secure:false,
        maxAge:30*24*60*60*1000
    })

}

module.exports =  generateToken
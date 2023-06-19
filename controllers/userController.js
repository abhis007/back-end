const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const generateToken = require('../utils/generateToken')

const registerUser =asyncHandler(async (req,res,next) =>{
    const {name ,email ,password } = req.body

        const userExist = await User.findOne({email})
         if(userExist){
            res.status(400)
            throw new Error('User Already Exist')
         }else{
          const user = await User.create({name,email,password})
           if(user){
            console.log(user)
            generateToken(res,user._id)
            res.status(201).json({
              _id:user._id,
              email:user.email,
              name:user.name
            });
           }else{
            res.status(400)
            throw new Error('invalid user data')
           }


         }
       
    
  
  

})

const authUser = async (req,res)=>{
    res.status(200).json({message:"auth"})
}

const logout = async (req,res) =>{
    res.status(200).json({message:"logout"})
}

const getUserProfile  = async (req,res) =>{
    res.status(200).json({message:"get user profile"})
}

const updateUserProfile  = async (req,res)=>{
    res.status(200).json({message:"update user profile"})
}

module.exports = {
    registerUser,
    authUser,
    logout,
    getUserProfile,
    updateUserProfile

}
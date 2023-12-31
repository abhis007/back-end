const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema  = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps: true})

userSchema.pre("save", async function(next){
  if(!this.isModified('password')){
    next()
  }else{
    const salt  = await bcrypt.genSalt(6)
   
    this.password = await bcrypt.hash(this.password,salt)

  }
})

const User = mongoose.model('User',userSchema)

module.exports = User
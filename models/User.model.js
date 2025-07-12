const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
     {
          name:{
               type: String,
               required: [true, "Please enter the user name"]
          },
          email:{
               type: String,
               required: [true, "Please enter the email"]
          },
          password:{
               type: String,
               required: [true, "Please enter the password"]
          },
          age:{
               type: String,
               required: [true, "Please enter the age"]
          },
          isActive:{
               type: Boolean,
               default:true
          }
     },
     {
          timestamps:true 
     }
)
const User = mongoose.model("User", UserSchema)

module.exports = User;
const jwt = require('jsonwebtoken')

const generateToken = (user)=>{
   if(!user) return null

   const userData = {
       user: user.username,
       id: user.id
   }

   return jwt.sign(userData, process.env.JWT_SECRET, {expiresIn: '1d'})
}

const cleanUser = (user) => {
   if(!user) return null
   return {
       user: user.username,
       id: user.id
   }
}

// module.exports = {
//     generateToken,
//     cleanUser
// }
const jwt = require('jsonwebtoken');
// this function is fro any route that we want to be protected
// that means we dont want to access the routes without having the 
// jwt token
module.exports = function(req, res, next){
    // taking the token from the header
   const token = req.header('auth-token');
   // if we dont have token
   if(!token) return res.status(401).send('Access Denied');
   // if we have token then we are verifying below
   try {
       const verified = jwt.verify(token, 'ashashashashash');
       req.user = verified;
       next();
   }catch(err){
      res.status(400).send('Invalid Token');
   }
}
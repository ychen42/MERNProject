const jwt = require('jsonwebtoken');
const config = require('config');

//middleware function has access to the request
// and response cycle/objects
// next its a callback that we have to run once we 're done
// so it can move on to the next piece of middleware
module.exports = function(req, res, next){
    // Get token from header
    const token = req.header('x-auth-token');

    // Check if there's no token
    if(!token){
        return res.status(401).json({ msg: 'No token, authorization denied'});
        
        //verify token: if yes, decode it, else token not valid
        try{
            const decoded = jwt.verify(token, config.get('jwtSecret'));
            req.user = decoded.user;
            next();
        } catch(err){
            res.status(401).json({msg : 'Token is not valid'});
        }
    }
}
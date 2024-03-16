var jwt = require('jsonwebtoken');
const JWT_secret = "shivaloginadmin";




const fetchuser = (req, res, next) => {
    //get user from the jwd tokenand add id to req object
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send({ error: 'please authenticate using a valid token' })
    }

    try {
        const data = jwt.verify(token, JWT_secret)
        req.user = data;
        next();
    } catch (error) {
        console.error(error.message);
        res.status(401).send({ error: 'please authenticate using a valid token' });
    }


}






module.exports = fetchuser;
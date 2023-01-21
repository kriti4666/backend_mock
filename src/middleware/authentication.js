const jwt = require("jsonwebtoken");

const authenticate = ((req, res, next ) => {
    const token = req.headers?.["authorization"];
    const decode = jwt.verify(token, "hasssstop");

    try {
        if(decode) {
            // console.log(decode);
            const userID = decode.id;
            req.body.userID = userID;
            console.log(userID)
            next();
        }
        else{
            res.send("Please Login");
        }
    } catch (error) {
        return res.send(error.message);
    }
})

module.exports = authenticate;
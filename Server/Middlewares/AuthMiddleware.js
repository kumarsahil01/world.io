const User = require("../Models/UserModel");
const jwt = require("jsonwebtoken");

module.exports.checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  console.log("middleware called")
  if (token) {
    jwt.verify(
      token,
      "sahil kumar super secret ",
      async (err, decodedToken) => {
        if (err) {
          res.json({ status: false });
          next();
        } else {
          const user = await User.findById(decodedToken.id);
          if (user){
            res.json({ status: true, user: user.email });
            next()
          } 
          else{
            res.json({ status: false });
            next()
          } 

        }
      }
    );
  } else {
    res.json({ status: false });
    next();
  }
};
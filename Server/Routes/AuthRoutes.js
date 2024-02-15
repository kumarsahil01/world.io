const { register, login } = require("../Controllers/AuthControllers")
const {checkUser}=require('../Middlewares/AuthMiddleware')
const router = require("express").Router();

router.post("/register",register);
router.post('/login',login);
router.post('/',checkUser);

module.exports=router;
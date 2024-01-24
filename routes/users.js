const express = require("express");
const router = express.Router();
const { getUser, addUser, getUserByEmail, deleteUser, updateUser, loginUser } = require("../controllers/user");
// const { verifyToken, checkRole } = require('../')

// router.use(bodyParser.urlencoded({ extended: false }));
// router.use(bodyParser.json());
router.post('/addUser', (req, res) => {
    // Handle the addUser logic
  });
router.get("/", getUser);
router.get("/getUser", getUserByEmail)
// router.delete("/deleteUser", deleteUser)
// router.get("/deleteUser", deleteUser)
router.post("/updateUser", updateUser)
router.post("/loginUser", loginUser)

module.exports = router;
const router = require("express").Router();
const uploadPic = require("../helpers/handleStorage")
const userCt = require("./usersCt")

router.get("/", userCt.getAllusers);
router.post("/", uploadPic.single("profilePic"),  userCt.createUser);
router.put("/:id", userCt.updateUser);
router.delete("/:id", userCt.deleteUserById);




module.exports = router ;

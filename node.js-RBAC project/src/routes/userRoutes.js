const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRoles = require("../middlewares/roleMiddlewaree");
const router = express.Router();

// Only admin can access this router
router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res) => {
    res.json({ message: "Welcome Admin" });
});
// Both admin and manager can access this router
router.get("/manager", verifyToken, authorizeRoles("admin","manager"), (req, res) => {
    res.json({ message: "Welcome manager" });
});
// All can access this router
router.get("/user", verifyToken, authorizeRoles("admin","manager","user"), (req, res) => {
    res.json({ message: "Welcome user" });
});


module.exports = router;
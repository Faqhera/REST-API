const express = require ("express");
const router = express.Router();
const productCtrl = require("../controller/productCtrl");
router.get("/",productCtrl.getAll);
router.post("/create", productCtrl.addProduct);

module.exports = router;

const express = require("express");
const router = express.Router();
const getEssentialOilsController = require("../controllers/getEssentialOils");
const postEssentialOils = require("../controllers/postEssentialOils")

//GET api/essential-oils
router.get("/essential-oils", getEssentialOilsController);

router.post("/essential-oils/edit", postEssentialOils);

module.exports = router;

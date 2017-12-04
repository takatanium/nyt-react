const router = require("express").Router();
const articleRoutes = require("./articles");

router.use("/saved", articleRoutes);

module.exports = router;

const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const SampleEventController = require("../controllers/sample-event");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get('/', SampleEventController.getSamplingForm) //reads and displays sampling form
// router.get("/:id", ensureAuth, SampleEventController.getSampleEvent); //gets specific sampling event that already happened


// router.post("/createSampleEvent", upload.single("file"), postsController.createSampleEvent);

// router.put("/likePost/:id", postsController.likePost);

// router.delete("/deleteSampleEvent/:id", SampleEventController.deleteSampleEvent);

module.exports = router;
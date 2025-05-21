const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const SampleEventController = require("../controllers/sample-event");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/", SampleEventController.getSamplingForm) //reads and displays sampling form
// router.get("/:id", ensureAuth, SampleEventController.getSampleEvent); //gets specific sampling event that already happened
router.post('/newSampleEvent', SampleEventController.createSampleEvent);
// router.post("/newSampleEvent", upload.single("file"), postsController.createSampleEvent); //keeping it for upload post example for when I want to upload a picture for a well
// router.put("/likePost/:id", postsController.likePost); //routes an update command to a controller 

// router.delete("/deleteSampleEvent/:id", SampleEventController.deleteSampleEvent); //routes delete command to a controller

module.exports = router;
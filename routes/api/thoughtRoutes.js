const router = require("express").Router();
const { getThoughts, getSingleThought, createThought, updateThought, deleteThought, createReaction, deleteReaction } = require("../../controllers/thoughtController.js");

// /api/thoughts
router.route("/").get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId/responses
router.route("/thoughtId/responses/:responseId").post(createReaction);

// /api/thoughts/:thoughtId/responses/:responseId
router.route("/:thoughtId/responses/:responseId").delete(deleteReaction);

// /api/thoughts/:thoughtId
router.route("/:thoughtId").get(getSingleThought).put(updateThought).delete(deleteThought);

module.exports = router;

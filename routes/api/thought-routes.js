const router = require('express').Router();

const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// routes for GET and POST all thoughts api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// GET PUT DELETE thoughts by id api/thoughts/id 
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// POST and DELETE routes for reactions 
router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction);

module.exports = router;
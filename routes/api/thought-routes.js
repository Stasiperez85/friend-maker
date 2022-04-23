const router = require('express').Router();

const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  createReaction,
  deleteThought,
  deleteReaction
} = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/thought
router
  .route('/')
  .get(getAllThought)

router
  .route('/:userId')

router
  .route('/:userId').post(createThought);

router
  .route('/:thoughtId/reactions')
  .post(createReaction)

// /api/thought-routes/reactionId
router.route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

// Set up GET one, PUT, and DELETE at /api/thought/:id
router
  .route('/:thoughtId').get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router
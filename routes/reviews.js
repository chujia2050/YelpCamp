const express = require('express');
const router = express.Router({mergeParams: true});
const catchAsync = require('../utils/catchAsync');
const reviews = require('../controllers/reviews');
const {isLoggedIn, isReviewAuthor, validateReview} = require('../middleware');

// create new review
router.post('/', isLoggedIn, validateReview, catchAsync(reviews.createReview));

// delete review
router.delete('/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview));

module.exports = router;
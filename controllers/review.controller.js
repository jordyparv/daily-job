const Review = require('../models/Review.model');

exports.addReview = async (req, res) => {
    try {
        const { reviewee, job, rating, comment } = req.body;
        const reviewer = req.user.userId;

        const review = new Review({
            reviewer,
            reviewee,
            job,
            rating,
            comment
        });

        await review.save();

        res.status(201).json({ message: 'Review added successfully', review });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Additional review controller methods can be added here
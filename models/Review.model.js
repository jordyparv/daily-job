const { default: mongoose, Schema } = require("mongoose");

const ReviewSchema = new Schema({
    reviewer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    reviewee: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    job: {
        type: Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment: {
        type: String,
        maxlength: 2000
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Indexing the reviewee and job fields for quick lookups
ReviewSchema.index({ reviewee: 1, job: 1 });

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;
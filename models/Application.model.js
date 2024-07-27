const { default: mongoose, Schema } = require("mongoose");

const ApplicationSchema = new Schema({
    job: {
        type: Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    seeker: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    coverLetter: {
        type: String,
        maxlength: 2000
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    },
    appliedAt: {
        type: Date,
        default: Date.now
    }
});

// Indexing the job and seeker fields for quick lookups
ApplicationSchema.index({ job: 1, seeker: 1 });

const Application = mongoose.model('Application', ApplicationSchema);
module.exports = Application;
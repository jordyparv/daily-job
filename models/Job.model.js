const { default: mongoose, Schema } = require("mongoose");

const JobSchema = new Schema({
    poster: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    description: {
        type: String,
        required: true,
        maxlength: 2000
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    compensation: {
        type: Number,
        required: true,
        min: 0
    },
    status: {
        type: String,
        enum: ['open', 'in-progress', 'completed', 'closed'],
        default: 'open'
    },
    postedAt: {
        type: Date,
        default: Date.now
    }
});

// Indexing the location field for geospatial queries
JobSchema.index({ location: '2dsphere' });
// Indexing the status and poster for efficient queries
JobSchema.index({ status: 1, poster: 1 });

const Job = mongoose.model('Job', JobSchema);
module.exports = Job;
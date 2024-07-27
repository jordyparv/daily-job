const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 2,
        maxLength: 100
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    },
    password: {
        type: String,
        required: true,
        minLength:4,
    },
    role: {
        type: String,
        enum: ['poster', 'seeker', 'admin'],
        default: 'seeker'
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
    profilePicture: String,
    ratings: {
        type: Number,
        min: 0,
        max: 5,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Indexing the email field for quick lookups
UserSchema.index({ email: 1 });
// Indexing the location field for geospatial queries
UserSchema.index({ location: '2dsphere' });

const User = mongoose.model('User', UserSchema);
module.exports = User;
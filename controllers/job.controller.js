const Job = require('../models/Job.model');
const User = require('../models/User.model');

exports.createJob = async (req, res) => {
    try {
        const { title, description, location, compensation } = req.body;
        const poster = req.user.userId;

        const job = new Job({
            poster,
            title,
            description,
            location,
            compensation
        });

        await job.save();

        res.status(201).json({ message: 'Job created successfully', job });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Additional job controller methods can be added here
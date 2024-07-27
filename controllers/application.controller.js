const Job = require('../models/Job.model');
const Application = require('../models/Application.model');

exports.applyForJob = async (req, res) => {
    try {
        const { job, coverLetter } = req.body;
        const seeker = req.user.userId;

        const jobExists = await Job.findById(job);
        if (!jobExists) {
            return res.status(404).json({ message: 'Job not found' });
        }

        const application = new Application({
            job,
            seeker,
            coverLetter
        });

        await application.save();

        res.status(201).json({ message: 'Application submitted successfully', application });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


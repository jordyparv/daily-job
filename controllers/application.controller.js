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

exports.getApplicationsForJob = async (req, res) => {
    try {
        const { jobId } = req.params;
        const applications = await Application.find({ job: jobId }).populate('seeker', 'name email');
        res.json(applications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getAllApplication = async (req, res) => {
    try {
        const applications = await Application.find()
        res.json(applications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
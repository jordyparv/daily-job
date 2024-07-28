const User = require('../models/User.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { name, email, password, role, location } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashedPassword,
            role,
            location
        });

        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        let limit = !Number.isNaN(Number(req.query.limit)) ? Number(req.query.limit) : 25
        const totalUsers = await User.countDocuments()
        const users = await User.find().limit(limit)
        let output = {
            data: users,
            message: "users fetched successfully",
            totalUsers
        }
        return res.status(200).json(output)
    } catch (error) {
        let errorRes =
        {
            message: "Interval server issue"
        }
        console.error(error.message)
        return res.status(500).json(errorRes)
    }
}
// Additional user controller methods can be added here
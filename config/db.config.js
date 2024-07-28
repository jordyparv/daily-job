const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(getDbURI(process.env.MONGO_URI));
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

const getDbURI = (uri) => {
    let { MONGO_USER, MONGO_PASSWD } = process.env;
    if (MONGO_PASSWD && MONGO_USER) {
        uri = uri.replace('<username>', encodeURIComponent(MONGO_USER));
        uri = uri.replace('<password>', encodeURIComponent(MONGO_PASSWD));
        return uri;
    }
    return uri;
};

module.exports = connectDB;

const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const connectDB = async () => {
  try {
    let dbUrl = process.env.MONGO_URI;
    
    // Use in-memory MongoDB server for development/testing
    if (process.env.NODE_ENV !== 'production') {
      console.log('Using MongoDB Memory Server for development');
      const mongoServer = await MongoMemoryServer.create();
      dbUrl = mongoServer.getUri();
    }
    
    // Add connection options
    const options = {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };
    
    await mongoose.connect(dbUrl, options);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    if (error.reason) {
      console.error('Error reason:', error.reason);
    }
    process.exit(1);
  }
};

module.exports = connectDB;

import { mongoose } from 'mongoose';

let connected = false;

const connectDB = async () => {
  mongoose.set('strictQuery', true);

  //if db is already connected, return
  if (connected) {
    console.log('db already connected');
    return;
  }

  //connect to db
  try {
    await mongoose.connect(process.env.MONGO_URI);
    connected = true;
    console.log('db connected');
  } catch (err) {
    console.error(err);
  }
};

export default connectDB;

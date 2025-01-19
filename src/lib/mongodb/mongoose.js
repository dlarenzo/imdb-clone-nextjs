// IMPORT MONGOOSE
import mongoose from "mongoose";

// CREATE INITIALIZE VARIABLE
let initialized = false;

export const connect = async () => {
  // IF ALREADY INITIALIZED, RETURN ALREADY INITIALIZED
  mongoose.set("strictQuery", true);
  if (initialized) {
    console.log("MongoDB already connected");
    return;
  }
  try {
    // TRY TO CONNECT TO MONGODB AT MONGODB_URI
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "next-imdb-clerk",
      userNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // IF SUCCESSFUL, SET INITIALIZED TO TRUE & LOG SUCCESS
    initialized = true;
    console.log("MongoDB connected");
  } catch (error) {
    // IF ERROR, LOG ERROR
    console.error("Error connecting to MongoDB", error);
  }
};

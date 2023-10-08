"use server";

import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("=> using existing database connection");
    return;
  }

  if (!process.env.MONGO_DB_URI) {
    console.log(
      "Please define the MONGODB_URI environment variable inside .env"
    );
  }

  try {
    console.log("=> using new database connection");
    const db = await mongoose.connect(String(process.env.MONGO_DB_URI));
    isConnected = true;
  } catch (error: any) {
    throw new Error(error);
  }
};

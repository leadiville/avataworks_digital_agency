/* create a small helper to connect to mongodb once and reuse */
import mongoose from "mongoose";

const URI = process.env.MONGODB_URI!;
const DB = process.env.MONGODB_DB;

if (!URI) {
  throw new Error("define the MONGODB_URI  in .env.local");
}

declare global {
  var mongoose: {
    conn: mongoose.Mongoose | null;
    promise: Promise<mongoose.Mongoose> | null;
  };
}

// Prevent multiple connections in developement
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export const connectDb = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(URI, { dbName: DB })
      .then((response) => response);
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

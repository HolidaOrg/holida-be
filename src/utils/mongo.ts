import mongoose from "mongoose";

const MONGO_URL: string = process.env.DB_URL!;

mongoose.connection.once("open", () => {
  console.log("⚡️ MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

export async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

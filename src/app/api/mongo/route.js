import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  // Replace the following with your Atlas connection string
  const url =
    "mongodb+srv://ali:YTJjgCOsgvh9N7RD@learning.sv1yvkt.mongodb.net/?retryWrites=true&w=majority&appName=Learning";
  // Connect to your Atlas cluster
  const client = new MongoClient(url);

  async function run() {
    try {
      await client.connect("inventory");
      console.log("Successfully connected to Atlas");
    } catch (err) {
        console.log(err.stack);
    } finally {
      await client.close();
    }
  }
  
  run().catch(console.dir);
  return NextResponse.json({ name: "Ali" });
}

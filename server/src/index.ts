import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

import connectDB from './utils/db';
import typeDefs from "./schema/typeDefs";
import { resolvers } from "./resolvers";
 
const startServer = async () => {
  const app = express();
  const port = 4000;

  // 🛡 Middleware setup
  app.use(cors());
  app.use(express.json());

  // 🚀 Apollo Server setup
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  // 🔗 MongoDB Connection
  try {
    // await mongoose.connect(process.env.MONGO_URI!);
    await connectDB()
    console.log("✅ Connected to MongoDB");

    app.listen(port, () => {
      console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
    });
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
};

startServer();
import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

// Replace these with your actual GraphQL schema and resolvers
import { typeDefs } from "./schema/typeDefs";
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
  mongoose.connect(process.env.MONGO_URI!)
    .then(() => {
      console.log("✅ MongoDB connected");
      app.listen(port, () => {
        console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
      });
    })
    .catch((err) => {
      console.error("❌ MongoDB connection error:", err);
    });
};

startServer();